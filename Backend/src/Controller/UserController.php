<?php

namespace App\Controller;

use App\Entity\Ingredient;
use App\Entity\ShoppingList;
use App\Entity\ShoppingListIngredient;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 *@Route("/api/user")
 */
class UserController extends AbstractController
{
    private $apiKey;

    public function __construct($apiKey)
    {
        $this->apiKey = $apiKey;
    }

    /**
     * requete permettant d'afficher la home page de l'utilisateur
     * 
     * @Route("/", name="user_home_page")
     */
    public function userHomePage(Request $request, SerializerInterface $serializer)
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

            $shoppinLists = $user->getShoppingList()->toArray();
            $shoppinListTitle = [];
            foreach ($shoppinLists as $shoppinList) {

                $shoppinListTitle[] = $shoppinList->getTitle();
            }

            return $this->json([
                'shoppingList' => $shoppinListTitle,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true
            ]);
        }
    }

    /**
     * requete permettant d'afficher les listes de courses de l'utilisateur
     * 
     * @Route("/shopping-lists", name="user_shopping_lists")
     */
    public function userShoppingLists(Request $request, SerializerInterface $serializer)
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
            $shoppingLists = $user->getShoppingList()->toArray();
            $shoppingListTitle = [];

            foreach ($shoppingLists as $shoppingList) {
                $shoppingListTitle[] = $shoppingList->getTitle();
            }
            return $this->json([
                'shoppingList' => $shoppingListTitle,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true
            ]);
        }
    }

    /**
     * requete permettant d'afficher le détail d'une  liste de courses 
     * 
     * @Route("/shopping-list/{id}", name="user_shopping_list")
     */
    public function userShoppingList(Request $request, SerializerInterface $serializer, ShoppingList $shoppingList)
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

            $currentList = $entityManager->getRepository(ShoppingListIngredient::class)->findBy(['shoppingList' => $shoppingList->getId()]);

            $currentShoppingList = [];
            for ($i = 0; $i < count($currentList); $i++) {

                $currentIngredientName  = $currentList[$i]->getIngredient()->getName();
                $currentAmount          = floatval($currentList[$i]->getAmount());
                $currentUnit            = $currentList[$i]->getUnit();

                $currentShoppingList[$i]['name']   = $currentIngredientName;
                $currentShoppingList[$i]['amount'] = $currentAmount;
                $currentShoppingList[$i]['unit']   = $currentUnit;
            }

            $shoppingListTitle =  $shoppingList->getTitle();

            return $this->json([
                'shoppingListTitle' => $shoppingListTitle,
                'userShoppingList'  => $currentShoppingList,
                'firstname'         => $user->getFirstname(),
                'lastname'          => $user->getLastname(),
                'email'             => $user->getEmail(),
                'avatar'            => $user->getAvatar(),
                'resultat'          => true,
            ]);
        }
    }

    /**
     * requete permettant de créer une liste de courses 
     * 
     * @Route("/shopping-list-add", name="user_shopping_list_add")
     */
    public function userShoppingListAdd(Request $request, SerializerInterface $serializer)
    {
        
     
            $data              = $request->getContent();
            $data              = json_decode($data);
            $token             = $data->token;
            $shoppingListTitle = $data->shoppingListTitle;
            $ingredientsList   = $data->ingredientsList;

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $errors = [];
            if (!$user) {
                $errors[] = "Unknown user";
            }

            $shoppingList = new ShoppingList();
            $shoppingList->setTitle($shoppingListTitle);
            $shoppingList->setCreatedAt(new \Datetime());
            $shoppingList->setUser($user);
            $entityManager->persist($shoppingList);
            $entityManager->flush();

            foreach ($ingredientsList as $key => $value) {

                $ingredient = $entityManager->getRepository(Ingredient::class)->findOneBy(['id' => $value->id]);

                $shoppingListIngredient = new ShoppingListIngredient();

                $shoppingListIngredient->setShoppingList($shoppingList);
                $shoppingListIngredient->setIngredient($ingredient);
                $shoppingListIngredient->setAmount($value->amount);
                $shoppingListIngredient->setUnit($value->unit);
                $entityManager->persist($shoppingListIngredient);
                $entityManager->flush();
            }

            $shoppingList = $shoppingList->getTitle();

            return $this->json([
                'shoppingList' => $shoppingList,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true,
            ]);
        
    }

    /**
     * requete permettant de mettre à jour une liste de courses  
     * 
     * @Route("/shopping-list-update/{id}", name="user_shopping_list_update")
     */
    public function userShoppingListUpdate(Request $request, SerializerInterface $serializer, ShoppingList $shoppingList)
    {
        if ($request->isMethod('POST')) {
            $data                     = $request->getContent();
            $data                     = json_decode($data);
            $token                    = $data->token;
            $ingredientsRequestList   = $data->ingredientsList;

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $errors = [];
            if (!$user) {
                $errors[] = "Unknown user";
            }

            // Get current user shopping list id
            $currentListId = $shoppingList->getId();

            // Fetch current ingredients in db
            $currentList = $entityManager->getRepository(ShoppingListIngredient::class)->findBy(['shoppingList' => $currentListId]);

            // Make an array with current list ingredients
            $currentShoppingList = [];
            for ($i = 0; $i < count($currentList); $i++) {

                $currentIngredientId    = $currentList[$i]->getIngredient()->getId();
                $currentIngredientName  = $currentList[$i]->getIngredient()->getName();
                $currentAmount          = floatval($currentList[$i]->getAmount());
                $currentUnit            = $currentList[$i]->getUnit();

                $currentShoppingList[$i]['id']     = $currentIngredientId;
                $currentShoppingList[$i]['name']   = $currentIngredientName;
                $currentShoppingList[$i]['amount'] = $currentAmount;
                $currentShoppingList[$i]['unit']   = $currentUnit;
            }

            // Make an array with requested ingredients
            $requestedShoppingList = [];

            for ($i = 0; $i < count($ingredientsRequestList); $i++) {
                $newIngredientId     = intval($ingredientsRequestList[$i]->id);
                $newIngredientName   = $ingredientsRequestList[$i]->name;
                $newIngredientAmount = $ingredientsRequestList[$i]->amount;
                $newIngredientUnit   = $ingredientsRequestList[$i]->unit;

                $requestedShoppingList[$i]['id']     = $newIngredientId;
                $requestedShoppingList[$i]['name']   = $newIngredientName;
                $requestedShoppingList[$i]['amount'] = $newIngredientAmount;
                $requestedShoppingList[$i]['unit']   = $newIngredientUnit;
            }

            // Merge arrays & build new one
            $mergedShoppingList = array_merge($currentShoppingList, $requestedShoppingList);
            $finalShoppingList = array();
            foreach ($mergedShoppingList as $unique) {
                $key = $unique['id'];

                // Merge duplicates and increase amounts
                if (isset($finalShoppingList[$key])) {
                    if ($finalShoppingList[$key]['id'] === $unique['id']) {
                        $finalShoppingList[$key]['amount'] += $unique['amount'];
                    }
                } else {
                    $finalShoppingList[$key] = $unique;
                }
            }

            // Clean the original list
            foreach ($currentList as $cleanIngredient) {
                $entityManager->remove($cleanIngredient);
            }

            // Finally update the list
            foreach ($finalShoppingList as $pouet) {

                $newIngredient = $entityManager->getRepository(Ingredient::class)->findOneBy(['id' => $pouet['id']]);

                $newShoppingList = new ShoppingListIngredient;
                $newShoppingList->setShoppingList($shoppingList)
                    ->setIngredient($newIngredient)
                    ->setAmount($pouet['amount'])
                    ->setUnit($pouet['unit']);
                $entityManager->persist($newShoppingList);
                $entityManager->flush();
            }

            $entityManager->persist($shoppingList);
            $entityManager->flush();

            $shoppingListTitle = $shoppingList->getTitle();

            return $this->json([
                'shoppingListTitle' => $shoppingListTitle,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true,
            ]);
        }
    }

    /**
     * reuqete permmettant de supprimer une liste de course
     * 
     * @Route("/shopping-list-remove/{id}", name="user_shopping_list_remove")
     */
    public function userShoppingListRemove(Request $request, SerializerInterface $serializer, ShoppingList $shoppingList)
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

            $entityManager->remove($shoppingList);
            $entityManager->flush();

            $shoppingList = $shoppingList->getTitle();

            return $this->json([
                'shoppingList' => $shoppingList,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true,
            ]);
        }
    }
}