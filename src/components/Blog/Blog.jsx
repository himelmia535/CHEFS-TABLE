import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const{recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = blog;
    return (
        <div>
            <div className='border border-primary rounded-2xl p-4 m-2 h-screen relative'>
                <img className='h-80 w-full' src={recipe_image} alt="" />
                <h2 className="text-3xl m-2 text-center hover:text-sky-600"> {recipe_name} </h2>
                <h2 className="text-xl">{short_description}</h2>
                <div>
                    <h2 className='text-2xl m-2'>Ingredients : {ingredients.length}</h2>
                    <ul>
                        <li>1. {ingredients[0]}</li>
                        <li>2. {ingredients[1]}</li>
                        <li>3. {ingredients[2]}</li>
                        <li>4. {ingredients[3]}</li>
                    </ul>
                </div>
                <div className='flex justify-between text-xl m-4'>
                     <h3 className='flex'> <img className='h-6 w-6 m-1' src="https://i.ibb.co/pjrzQy3/clock.png" alt="" />{preparing_time} min</h3>
                     <h3 className='flex'> <img className='h-6 w-6 m-1' src="https://i.ibb.co/T80NjKH/calories.png" alt="" />{calories} calories</h3>
                </div>
                <button className="btn btn-success absolute bottom-0 left-0 right-0 m-2 text-white hover:bg-slate-800  ">Want to Cook</button>

            </div>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;