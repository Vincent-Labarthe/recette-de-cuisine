<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Recipe;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api")
 */
class RecipeController extends AbstractController
{
    private $apiKey;
    public function __construct($apiKey)
    {
        $this->apiKey = $apiKey;
    }

    /**
     * requete permettant de faire des recherches
     * 
     *@Route("/recipe/search")
     */
    public function recipeSearch(Request $request)
    {
        $client = HttpClient::create();
        $data = $request->getContent();
        $data = json_decode($data);
        $recipeSearch = $data->recipeSearch;

        if (!is_null($data->diets) && !is_null($data->intolerance)) {
            $dietTag = $data->diets;
            $dietTag = implode(",", $dietTag);
            $intoleranceTag = $data->intolerance;
            $intoleranceTag = implode(",", $intoleranceTag);
            $response = $client->request(
                'GET',
                "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=10&query=$recipeSearch&diet=$dietTag&intolerances=$intoleranceTag&apiKey=$this->apiKey",
                [
                    'headers' => [
                        'X-RapidAPI-Host' => 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                        'X-RapidAPI-Key' => "$this->apiKey"
                    ]
                ]
            );
        } elseif (!is_null($data->diets) && is_null($data->intolerance)) {
            $dietTag = $data->diets;
            $dietTag = implode(",", $dietTag);
            $response = $client->request(
                'GET',
                "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=10&query=$recipeSearch&diet=$dietTag&apiKey=$this->apiKey",
                [
                    'headers' => [
                        'X-RapidAPI-Host' => 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                        'X-RapidAPI-Key' => "$this->apiKey"
                    ]
                ]
            );
        } elseif (is_null($data->diets) && !is_null($data->intolerance)) {
            $intoleranceTag = $data->intolerance;
            $intoleranceTag = implode(",", $intoleranceTag);
            $response = $client->request(
                'GET',
                "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=10&query=$recipeSearch&&intolerances=$intoleranceTag&apiKey=$this->apiKey",
                [
                    'headers' => [
                        'X-RapidAPI-Host' => 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                        'X-RapidAPI-Key' => "$this->apiKey"
                    ]
                ]
            );
        } else {
            $response = $client->request(
                'GET',
                "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=10&query=$recipeSearch&apiKey=$this->apiKey",
                [
                    'headers' => [
                        'X-RapidAPI-Host' => 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                        'X-RapidAPI-Key' => "$this->apiKey"
                    ]
                ]
            );
        }
        
        $content = $response->toArray();
        if ($content['results'] !== []) {
            $idRecipe = [];
            foreach ($content['results'] as $value) {
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
            $content = $response->toArray();
            if (strlen($data->token) === 1) {
                $token = $data->token;
                $entityManager = $this->getDoctrine()->getManager();
                $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);
                return new JsonResponse([
                    $content,
                    'firstname' => $user->getFirstname(),
                    'lastname' => $user->getLastname(),
                    'email' => $user->getEmail(),
                    'avatar' => $user->getAvatar(),
                    'resultat' => true
                ]);
            }
            return new JsonResponse([
                $content,
                'resultat' => true
            ]);
        }
        return new  JsonResponse([
            'resultat' => false
        ]);
    }

    /**
     * requete permettant d'afficher les recette de l'utilisateur
     * 
     * @Route("/user/recipe", name="user_recipe_list")
     */
    public function userRecipeList(Request $request)
    {
        if ($request->isMethod('POST')) {

            $data  = $request->getContent();
            $data  = json_decode($data);
            $token = $data->token;
            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $errors = [];
            if (!$user) {
                $errors[] = "Unknown user";
            }

            $recipeLists = $user->getRecipes()->toArray();
            $recipeApiIds = [];

            foreach ($recipeLists as $recipeList) {

                $recipeApiIds[] = $recipeList->getApiId();
            }

            $recipeApiIds = json_encode($recipeApiIds,);
            $recipeApiIds = trim($recipeApiIds, '[]');

            $client = HttpClient::create();
            $response = $client->request(
                'GET',
                "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=$recipeApiIds&apiKey=$this->apiKey",
                [
                    'headers' => [
                        'X-RapidAPI-Host' => 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                        'X-RapidAPI-Key' => "$this->apiKey"
                    ]
                ]
            );

            $content = $response->toArray();
            return $this->json([
                $content,
                'firstname'  => $user->getFirstname(),
                'lastname'   => $user->getLastname(),
                'email'      => $user->getEmail(),
                'avatar'     => $user->getAvatar(),
                'resultat'   => true
            ]);
        }
    }

    /**
     * requete permettant d'ajouter une recette favorite en bdd
     * 
     * @Route("/user/recipe-add", name="user_recipe_add")
     */
    public function userRecipeAdd(Request $request)
    {
        if ($request->isMethod('POST')) {
            $data        = $request->getContent();
            $data        = json_decode($data);
            $token       = $data->token;
            $recipeTitle = $data->recipeTitle;
            $apiId       = $data->apiId;
            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $errors = [];

            if (!$user) {
                $errors[] = "Unknown user";
            }

            $newRecipe = new Recipe();
            $newRecipe->setName($recipeTitle);
            $newRecipe->setCreatedAt(new \Datetime());
            $newRecipe->addUser($user);
            $newRecipe->setApiId($apiId);
            $entityManager->persist($newRecipe);
            $entityManager->flush();
            $newRecipe = $newRecipe->getName();

            return $this->json([
                'recipeTitle'  => $newRecipe,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true,
            ]);
        }
    }

    /**
     * requete permettnat de supprimer une recette favorite de bdd
     * 
     * @Route("/user/recipe-remove", name="user_recipe_remove")
     */
    public function userRecipeRemove(Request $request)
    {
        if ($request->isMethod('POST')) {
            $data  = $request->getContent();
            $data  = json_decode($data);
            $token = $data->token;
            $recipeApiId = $data->apiId;

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $errors = [];

            if (!$user) {
                $errors[] = "Unknown user";
            }

            $recipeToDelete = $entityManager->getRepository(Recipe::class)->findOneBy(['apiId' => $recipeApiId]);
            $recipes = $user->getRecipes()->toArray();

            foreach ($recipes as $recipe) {

                if ($recipe->getApiId() === $recipeToDelete->getApiId()) {
                    $user->removeRecipe($recipe);
                }
            };

            $entityManager->flush();
            $recipeName = $recipe->getName();
            
            return $this->json([
                'recipeName'   => $recipeName,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true,
            ]);
        }
    }
}
