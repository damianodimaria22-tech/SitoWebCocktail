async function cercaCocktail()
{
	var nomeCercato = document.getElementById("inputNome").value;

	document.getElementById("risultati").innerHTML = "";
	document.getElementById("errore").style.display = "none";
	document.getElementById("contatore").style.display = "none";

	var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + nomeCercato;

	var risposta = await fetch(url);

	var dati = await risposta.json();

	if (dati.drinks == null)
	{
		document.getElementById("errore").style.display = "block";
		return;
	}

	var quantiCocktail = dati.drinks.length;
	document.getElementById("contatore").textContent = "Trovati " + quantiCocktail + " cocktail:";
	document.getElementById("contatore").style.display = "block";

	for (var i = 0; i < dati.drinks.length; i++)
	{
		var cocktail = dati.drinks[i];

		var nome       = cocktail.strDrink;
		var immagine   = cocktail.strDrinkThumb;
		var categoria  = cocktail.strCategory;
		var alcolico   = cocktail.strAlcoholic;
		var bicchiere  = cocktail.strGlass;
		var istruzioni = cocktail.strInstructions;

		var ingrediente1  = cocktail.strIngredient1;
		var ingrediente2  = cocktail.strIngredient2;
		var ingrediente3  = cocktail.strIngredient3;
		var ingrediente4  = cocktail.strIngredient4;
		var ingrediente5  = cocktail.strIngredient5;
		var ingrediente6  = cocktail.strIngredient6;
		var ingrediente7  = cocktail.strIngredient7;
		var ingrediente8  = cocktail.strIngredient8;
		var ingrediente9  = cocktail.strIngredient9;
		var ingrediente10 = cocktail.strIngredient10;
		var ingrediente11 = cocktail.strIngredient11;
		var ingrediente12 = cocktail.strIngredient12;
		var ingrediente13 = cocktail.strIngredient13;
		var ingrediente14 = cocktail.strIngredient14;
		var ingrediente15 = cocktail.strIngredient15;

		var dose1  = cocktail.strMeasure1;
		var dose2  = cocktail.strMeasure2;
		var dose3  = cocktail.strMeasure3;
		var dose4  = cocktail.strMeasure4;
		var dose5  = cocktail.strMeasure5;
		var dose6  = cocktail.strMeasure6;
		var dose7  = cocktail.strMeasure7;
		var dose8  = cocktail.strMeasure8;
		var dose9  = cocktail.strMeasure9;
		var dose10 = cocktail.strMeasure10;
		var dose11 = cocktail.strMeasure11;
		var dose12 = cocktail.strMeasure12;
		var dose13 = cocktail.strMeasure13;
		var dose14 = cocktail.strMeasure14;
		var dose15 = cocktail.strMeasure15;

		var listaIngredienti = "";

		if (ingrediente1 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose1 + " " + ingrediente1 + "</li>";
		}
		if (ingrediente2 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose2 + " " + ingrediente2 + "</li>";
		}
		if (ingrediente3 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose3 + " " + ingrediente3 + "</li>";
		}
		if (ingrediente4 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose4 + " " + ingrediente4 + "</li>";
		}
		if (ingrediente5 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose5 + " " + ingrediente5 + "</li>";
		}
		if (ingrediente6 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose6 + " " + ingrediente6 + "</li>";
		}
		if (ingrediente7 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose7 + " " + ingrediente7 + "</li>";
		}
		if (ingrediente8 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose8 + " " + ingrediente8 + "</li>";
		}
		if (ingrediente9 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose9 + " " + ingrediente9 + "</li>";
		}
		if (ingrediente10 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose10 + " " + ingrediente10 + "</li>";
		}
		if (ingrediente11 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose11 + " " + ingrediente11 + "</li>";
		}
		if (ingrediente12 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose12 + " " + ingrediente12 + "</li>";
		}
		if (ingrediente13 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose13 + " " + ingrediente13 + "</li>";
		}
		if (ingrediente14 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose14 + " " + ingrediente14 + "</li>";
		}
		if (ingrediente15 != null)
		{
			listaIngredienti = listaIngredienti + "<li>" + dose15 + " " + ingrediente15 + "</li>";
		}

		var cardHTML = "";
		cardHTML = cardHTML + "<div class='card'>";
		cardHTML = cardHTML + "\t<p class='numero-card'>Cocktail " + (i + 1) + " di " + quantiCocktail + "</p>";
		cardHTML = cardHTML + "\t<img src='" + immagine + "' alt='Foto " + nome + "' />";
		cardHTML = cardHTML + "\t<h2>" + nome + "</h2>";
		cardHTML = cardHTML + "\t<p><span class='etichetta'>Categoria:</span> " + categoria + "</p>";
		cardHTML = cardHTML + "\t<p><span class='etichetta'>Alcolico:</span> " + alcolico + "</p>";
		cardHTML = cardHTML + "\t<p><span class='etichetta'>Bicchiere:</span> " + bicchiere + "</p>";
		cardHTML = cardHTML + "\t<p><span class='etichetta'>Ingredienti:</span></p>";
		cardHTML = cardHTML + "\t<ul>" + listaIngredienti + "</ul>";
		cardHTML = cardHTML + "\t<p><span class='etichetta'>Istruzioni:</span></p>";
		cardHTML = cardHTML + "\t<p>" + istruzioni + "</p>";
		cardHTML = cardHTML + "</div>";

		document.getElementById("risultati").innerHTML = document.getElementById("risultati").innerHTML + cardHTML;
	}
}
      