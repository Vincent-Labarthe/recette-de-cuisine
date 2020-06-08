<?php

namespace App\Security;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class UserAuthenticator extends AbstractGuardAuthenticator
{
    private $passwordEncoder;
    private $entityManager;
    private $tokenGenerator;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder,EntityManagerInterface $entityManager, TokenGeneratorInterface $tokenGenerator )
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->entityManager = $entityManager;
        $this->tokenGenerator= $tokenGenerator;

    }
    public function supports(Request $request)
    {
        return $request->get("_route") === "user_login" && $request->isMethod("POST");
    }

    public function getCredentials(Request $request)
    {
        $data = $request->getContent();
        $data = json_decode($data);
        $email = $data->email;
        $password = $data->password;
        return [
            'email' => $email,
            'password' => $password
        ];
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        $user=new User;
        $email=$credentials['email'];
        $user=$this->entityManager->getRepository(User::class)->findOneBy(['email'=>$email]);
        return $user;
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
     
        return $this->passwordEncoder->isPasswordValid($user, $credentials['password']);

    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        return new JsonResponse([
            'error' => $exception->getMessageKey()
        ], 400);
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        
        $token = $this->tokenGenerator->generateToken();
        $data = $request->getContent();
        $request = json_decode($data);
        $email = $request->email;
        $user=$this->entityManager->getRepository(User::class)->findOneBy(['email'=>$email]);
        
        $user->setApiToken($token);
        $this->entityManager->flush();
        return new JsonResponse([
            'token'=> $token ,
            'result' => true
        ]);
    }

    public function start(Request $request, AuthenticationException $authException = null)
    {
        return new JsonResponse([
            'error' => 'Access Denied'
        ]);    }

    public function supportsRememberMe()
    {
        return false;
    }
}
