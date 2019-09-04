# Material UI React



## Définir un thème général avec `createMuiTheme`

L'utilisation de la méthode `createMuiTheme` permets de mettre en place un thème général pour l'app.

On déclare la constante `theme` à la fin de notre ficher.

Le code retourné nécessite d'être encapsulé par les balises `<MuiProvider theme={theme}>`.



```js
<MuiProvider theme={theme}>
    <Button>Hello</Button>
    <Button>World</Button>
</MuiProvider>

const theme = createMuiTheme({
    palette: {
        primaty: blue,
    },
    typography: {
        fontSize: 15,
    }
})
```





## Réécrire le style des composants fournis avec `overrides`

Material UI nos donne accès à des composants ayant un style par défault.

`overrides` nous permet de réécrire le style de base à notre façon.

Accessible avec `createMuiTheme`, il se place au même niveau que les propriété de la constante `theme` vu ci-dessus.

Pour écraser un style par défault, on passe directement par le nom du composant souhaité (ici `MuiButton`).

`root` équivaut aux propriétés de style par défault.



```js
    (...)
    typography: {
        fontSize: 15,
    }
    overrides: {
        MuiButton: {
            root: {
                backgroundColor: red,
                "&hover": { backgroundColor: yellow }
            }
        }
    }
```



## Ajouter son style avec `withStyles`

Il est également possible d'enrichir le code avec des `styles` personnalisés.

La méthode `withStyles` se greffe à l'export du composant, accompagnée en paramètre des propiétés contenues dans une constante `styles` déclarée plus haut.

La déclaration de propriétés dans la constante correspondent à des `classNames`, accessibles via les props de la classe (`this.props.classes.myCustomStyledElement`)

Il est donc nécessaire de transformer notre composant en classe pour utiliser la méthode `withStyles`



```js
<Button className={this.props.classes.myLeftButton}>Hello</Button>

const styles = {
    myLeftButton: {
        backgroundColor: blue,
    }
};

export default withStyles(styles)(App);
```
