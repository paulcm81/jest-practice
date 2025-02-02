class CookbookCli {
  constructor(cookbook) {
    this.cookbook = cookbook;
  }

  run(command, ...args) {
    switch (command) {
      case 'list': return this.list();
      case 'add': return this.add(...args);
      case 'get': return this.get(...args);
      case 'remove': return this.remove(...args);
      default: return `Whoops, the following command is unsupported: ${command}.`;
    }
  }

  list() {
    return `You have the following recipes: ${this.cookbook.listRecipes().join(',')}`;
  }

  add(name, ingredients) {
    this.cookbook.addRecipe(name, ingredients);
    return `Successfully added the following recipe: ${name}`;
  }
  else (name0) {
    return 'recipe already exists here'
  }

  get(name) {
    return `The ingredients for ${name} are: ${this.cookbook.getRecipe(name)}`;
  }
else (name)
{
  return 'Sorry no recipes found'
  alert ('no recipe found')
}
  remove(name) {
    this.cookbook.removeRecipe(name);
    return `Successfully removed the following recipe: ${name}`;
  }
}

module.exports = { CookbookCli };
