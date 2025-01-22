function ModificationRecipes(){

    return(
        <>
        <h2>Ajouter ou modifier un recette</h2>
        <form>  

            <label htmlFor="inputTitle">Titre:</label>
            <input type="text" id="inputTitle" placeholder="Titre de recette"/>

            <label htmlFor="inputDifficulte">Difficulté (1-5):</label>
            <select name="inputDifficulte" id="inputDifficulte">
            <option value="">--Please choose la difficulté (0-1)--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>

            <label htmlFor="inputCategorie">Catégorie:</label>
            <input type="text" className="inputCategorie" placeholder="Catégorie de la recette"/>

            <label htmlFor="inputDescription">Déscription:</label>
            <textarea name="inputDescription" id="inputDescription">Déscription de la recette</textarea>
        </form>
        </>
 )}

 export default ModificationRecipes;