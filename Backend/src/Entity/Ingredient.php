<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\IngredientRepository")
 */
class Ingredient
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Recipe", mappedBy="ingredients")
     */
    private $recipes;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ShoppingListIngredient", mappedBy="ingredient")
     */
    private $shoppingListIngredients;

    public function __construct()
    {
        $this->shoppingLists = new ArrayCollection();
        $this->recipes = new ArrayCollection();
        $this->shoppingListIngredients = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Recipe[]
     */
    public function getRecipes(): Collection
    {
        return $this->recipes;
    }

    public function addRecipes(Recipe $recipe): self
    {
        if (!$this->recipes->contains($recipe)) {
            $this->recipes[] = $recipe;
            $recipe->addRecipe($this);
        }

        return $this;
    }

    public function removeRecipe(Recipe $recipe): self
    {
        if ($this->recipes->contains($recipe)) {
            $this->recipes->removeElement($recipe);
            $recipe->removeRecipe($this);
        }

        return $this;
    }

    /**
     * @return Collection|ShoppingListIngredient[]
     */
    public function getShoppingListIngredients(): Collection
    {
        return $this->shoppingListIngredients;
    }

    public function addShoppingListIngredient(ShoppingListIngredient $shoppingListIngredient): self
    {
        if (!$this->shoppingListIngredients->contains($shoppingListIngredient)) {
            $this->shoppingListIngredients[] = $shoppingListIngredient;
            $shoppingListIngredient->setIngredient($this);
        }

        return $this;
    }

    public function removeShoppingListIngredient(ShoppingListIngredient $shoppingListIngredient): self
    {
        if ($this->shoppingListIngredients->contains($shoppingListIngredient)) {
            $this->shoppingListIngredients->removeElement($shoppingListIngredient);
            // set the owning side to null (unless already changed)
            if ($shoppingListIngredient->getIngredient() === $this) {
                $shoppingListIngredient->setIngredient(null);
            }
        }

        return $this;
    }
}
