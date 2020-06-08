<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 *@Route("/api")
 */
class UserAdminController extends AbstractController
{
    private $apiKey;

    public function __construct($apiKey)
    {
        $this->apiKey = $apiKey;
    }

    /**
     * @Route("/user/edit")
     * @IsGranted("ROLE_USER")
     */
    public function userEdit(Request $request)
    {
        if ($request->isMethod('POST')) {
            $data      = $request->getContent();
            $data      = json_decode($data);
            $token     = $data->token;
            $firstname = $data->firstname;
            $lastname  = $data->lastname;
            $email     = $data->email;

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $errors = [];
            if (!$user) {
                $errors[] = "Unknown user";
            }

            $user->setFirstname($firstname);
            $user->setLastname($lastname);
            $user->setEmail($email);

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->json([
                'id'           => $user->getId(),
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true
            ]);
        }
    }
}
