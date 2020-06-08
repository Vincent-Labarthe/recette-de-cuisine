<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api")
 */
class HomeController extends AbstractController
{
    private $apiKey;

    public function __construct($apiKey)
    {
        $this->apiKey = $apiKey;
    }
    /**
     * requete permettant d'afficher la page d'accueil
     * 
     * @Route("/home", name="home_page")
     */
    public function homePage(Request $request)
    {
        $client = HttpClient::create();

        $response = $client->request(
            'GET',
            "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=30&apiKey=$this->apiKey",
            [
                'headers' => [
                    'X-RapidAPI-Host' => 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                    'X-RapidAPI-Key' => "$this->apiKey"
                ]
            ]
        );

        if ($response) {
            $content = $response->toArray();
            $idRecipe = [];
            foreach ($content['recipes'] as $value) {
                $idRecipe[] = $value['id'];
            }
            $string = json_encode($idRecipe,);
            $string = trim($string, '[]');
            $response = $client->request(
                'GET',
                "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=$string&apiKey=$this->apiKey",
                [
                    'headers' => [
                        'X-RapidAPI-Host' => 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                        'X-RapidAPI-Key' => "$this->apiKey"
                    ]
                ]
            );
            $data  = $request->getContent();
            $data  = json_decode($data);
            
            if(!is_null($data->token))
            {
                $token=$data->token;
                $entityManager = $this->getDoctrine()->getManager();

                $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);
               
                return new JsonResponse([
                    $content,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true,
                ]);
            }
            $content = $response->toArray();
                return new JsonResponse([
                    $content,
                ]);
        }
        return new  JsonResponse([
            'resultat' => false
        ]);
    }
}
