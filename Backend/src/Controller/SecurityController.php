<?php

namespace App\Controller;


use App\Entity\User;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

/**
 * @Route("/api")
 */
class SecurityController extends AbstractController
{

    private $security;
    private $apiKey;

    public function __construct(Security $security, $apiKey)
    {
        $this->security = $security;
        $this->apiKey = $apiKey;
    }

    /**
     * requete permettant de s'inscrire sur le site 
     * 
     * @Route("/register", name="user_register", methods={"POST"})
     */
    public function userRegister(Request $request, UserPasswordEncoderInterface $encoder)
    {
        //we set a variable to store errors
        $errors = [];

        if ($request->isMethod('POST')) {

            $data = $request->getContent();
            $data = json_decode($data);
            $firstname = $data->firstname;
            $lastname = $data->lastname;
            $email = $data->email;
            $password = $data->password;
            $passwordConfirmation = $data->password_confirmation;

            if ($password != $passwordConfirmation) {
                $errors[] = "Password does not match the password confirmation.";
            }
            if (strlen($password) < 8) {
                $errors[] = "Password should be at least 8 characters.";
            }

            if (!$errors) {
                $user = new User;
                $user->setFirstname($firstname);
                $user->setLastname($lastname);
                $user->setPassword($encoder->encodePassword($user, $password));
                $user->setEmail($email);
                $user->setCreatedAt(new \DateTime());

                try {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->persist($user);
                    $entityManager->flush();
                    return $this->json([
                        'texte' => 'Your registration is successful. ',
                        'resultat' => true
                    ]);
                } catch (UniqueConstraintViolationException $e) {
                    $errors[] = "The email provided already has an account!";
                }
            }
        }

        $errors[] = "Form not submit";

        return $this->json([
            'errors' => $errors,
            'resultat' => false

        ], 400);
    }

    /**
     * reuqete permettant de connecter l'utilisateur
     * 
     * @Route("/login", name="user_login", methods={"POST"})
     */
    public function userLogin(AuthenticationUtils $authenticationUtils)
    {
        return $this->json(['result' => true]);
    }

    /**
     * requete permettant de deconnecter l'utilisateur
     * 
     * @Route("/logout", name="user_logout")
     */
    public function logout()
    {
        return $this->json([
            'result' => 'Your are disconnected',
        ]);
    }

    /**
     * requete permettant de desinscrire l'utilisateur
     * 
     * @Route("/unsubscribe", name="user_unsubcribe", methods={"POST"})
     */
    public function userUnsubcribe(Request $request)
    {
        if ($request->isMethod('POST')) {

            $entityManager = $this->getDoctrine()->getManager();

            $token = $this->security->getToken();
            $user = $token->getUser();

            if (!$user) {
                return $this->json([
                    'text' => 'User not found',
                    'result' => false
                ]);
            }

            $entityManager->remove($user);
            $entityManager->flush();
            return $this->json(
                [
                    'result' => true
                ]
            );
        }
        return $this->json(
            [
                'result' => false
            ]
        );
    }

    /**
     * requete permettant l'envoi d'un email de reset password
     * 
     * @Route("/forgotten-pwd", name="app_forgotten_password", methods="POST")
     */
    public function forgottenPassword(Request $request, UserPasswordEncoderInterface $encoder, MailerInterface $mailer, TokenGeneratorInterface $tokenGenerator)
    {
        //on vérifie si on a reçu le form 
        if ($request->isMethod('POST')) {
            //on récupère l'email
            $data = $request->getContent();
            $data = json_decode($data);
            $email = $data->email;

            $entityManager = $this->getDoctrine()->getManager();
            //on compare avec les email de la bdd
            $user = $entityManager->getRepository(User::class)->findOneBy(array("email" => $email));
            
            // si email inconnue 
            if (!$user) {
                return $this->json([
                    'text' => 'Email inconnu',
                    'result' => false
                ]);
            }
            // si email connu on génère un token de sécutité 
            $token = $tokenGenerator->generateToken();
            try {
                $user->setApiToken($token);
                $entityManager->flush();
            } catch (\Exception $e) {
                return $this->json([
                    'errors' => 'exeption catched'
                ], 400);
            }

            //on génère l'email
            $message = (new TemplatedEmail())
                ->from('admin@grocerez.com')
                ->to($user->getEmail())
                ->subject('reset password')
                ->text('Pour définir un nouvau mot de passe cliquez sur le lien ci dessous')
                ->htmlTemplate('security/resetPwdMail.html.twig')
                ->context([
                    'user' => $user,
                   'token' => $token

                ]);

            $mailer->send($message);
            return $this->json([
                'text' => 'email send',
                'result' => true
            ]);
        }
        return $this->json([
            false
        ]);
    }

    /**
     * requete permettant le reset du paswword
     * 
     * @Route("/reset-pwd", name="reset_pwd")
     */
    public function resetPwd(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        if ($request->isMethod('POST')) {
            $data = $request->getContent();
            $data = json_decode($data);
            $token = $data->token;
            $password= $data->password;

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            if ($user === null) {
                return $this->json([
                    'text' => 'Utilisateur inconnue',
                    'result'=>false
                ]);
            }
            
            $user->setApiToken("");
            $user->setPassword($passwordEncoder->encodePassword($user, $password));
            $entityManager->flush();

            return $this->json([
                'result' => 'mot de passe modifié',
            ]);
        } else {

            return $this->json([
                'text' => 'modification impossible',
                'result'=>false,
            ], 400);
        }
    }
}
