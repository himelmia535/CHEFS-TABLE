import { useState } from 'react';
import PropTypes from 'prop-types';
import Add from '../Add/Add';

const Adds = ({ wantCook, setWantCook }) => {
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const handlePrepare = (recipe) => {
        // Remove the recipe from the "Want to Cook" list
        const updatedWantCook = wantCook.filter(item => item.recipe_id !== recipe.recipe_id);
        setWantCook(updatedWantCook)
        setCurrentlyCooking(prev => [...prev, recipe]);
    };

    return (
        <div className="border border-primary rounded-2xl m-2 p-2 bg-slate-100 md:w-2/5">
            {/* Want to cook */}
            <div>
                <h2 className="text-3xl text-center font-semibold hover:text-red-600">Want to Cook: {wantCook.length}</h2>
                <h5 className="border-b-2 m-2 w-3/4 mx-auto"></h5>
                <div className="flex justify-evenly">
                    <h3>Name</h3>
                    <h3 className=''>Time</h3>
                    <h3 className='mr-10'>Calories</h3>
                </div>
                <div className='mt-4 mb-4'>
                    {
                        wantCook.map(add => <Add key={add.recipe_id} add={add} onPrepare={handlePrepare}></Add>)
                    }
                </div>
            </div>
            {/* currently cooking */}
            <div>
                <h2 className="text-3xl text-center font-semibold hover:text-red-600">Currently Cooking: {currentlyCooking.length}</h2>
                <h5 className="border-b-2 m-2 w-3/4 mx-auto"></h5>
                <div className="flex justify-evenly">
                    <h3>Name</h3>
                    <h3>Time</h3>
                    <h3>Calories</h3>
                </div>
                <div>
                    {currentlyCooking.map(recipe => (
                        <div className='border-2 border-slate-400 rounded bg-slate-300 h-16 p-2 items-center mt-2' key={recipe.recipe_id}>
                            <div className='flex justify-between'>
                            <p>{recipe.recipe_id}</p>
                            <p className='w-1/4'>{recipe.recipe_name}</p>
                            <p>{recipe.preparing_time} min</p>
                            <p>{recipe.calories} Calories</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Adds.propTypes = {
    wantCook: PropTypes.array.isRequired
};

export default Adds;
