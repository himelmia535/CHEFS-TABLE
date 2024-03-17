import PropTypes from 'prop-types';

const Add = ({add}) => {
    const{recipe_id, recipe_name, preparing_time, calories} = add;
    return (
        <div className='border-2 border-slate-400 rounded bg-slate-300 h-16 p-2 items-center mt-2'>
            <div className="flex justify-between">
                    <p>{recipe_id}</p>
                    <h3 className='w-1/4'>{recipe_name}</h3>
                    <h3>{preparing_time} min</h3>
                    <h3>{calories} Calories</h3>
                    <button className="btn btn-success">Preparing</button>
            </div>
        </div>
    );
};

Add.PropTypes = {
    add: PropTypes.object
}

export default Add;