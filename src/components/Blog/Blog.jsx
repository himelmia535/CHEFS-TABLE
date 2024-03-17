import PropTypes from 'prop-types';

const Blog = ({blog, handleWantToCook}) => {
    const{recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = blog;
    return (
        <div>
            <div className='border border-primary rounded-2xl p-4 m-2 h-screen relative bg-slate-50'>
                <img className='h-80 w-full' src={recipe_image} alt="" />
                <h2 className="text-3xl m-2 text-center font-semibold hover:text-sky-600"> {recipe_name} </h2>
                <h2 className="text-xl font-normal">{short_description}</h2>
                <div>
                    <h2 className='text-2xl m-2 font-medium'>Ingredients : {ingredients.length}</h2>
                    {
                        ingredients.map(item => <li key={item.recipe_id}>{item}</li>)
                    }
                </div>
                <div className='flex justify-between text-xl m-4'>
                     <h3 className='flex'> <img className='h-6 w-6 m-1' src="https://i.ibb.co/pjrzQy3/clock.png" alt="" />{preparing_time} min</h3>
                     <h3 className='flex'> <img className='h-6 w-6 m-1' src="https://i.ibb.co/T80NjKH/calories.png" alt="" />{calories} calories</h3>
                </div>
                <button onClick={() => handleWantToCook(blog)} className="btn btn-success absolute bottom-0 left-0 right-0 m-2 text-white hover:bg-slate-800  ">Want to Cook</button>

            </div>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
    // handleWantToCook: PropTypes.func
}

export default Blog;