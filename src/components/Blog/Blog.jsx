import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const{recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = blog;
    return (
        <div>
            <div>
                <img src={recipe_image} alt="" />
                <h2 className="text-3xl"> {recipe_name} </h2>
                <h2 className="text-xl">{short_description}</h2>
                <div>
                    <h2 className='text-2xl'>Ingredients : {ingredients.length}</h2>
                    <ul>
                        <li>1. {ingredients[0]}</li>
                        <li>2. {ingredients[1]}</li>
                        <li>3. {ingredients[2]}</li>
                        <li>4. {ingredients[3]}</li>
                    </ul>
                </div>
                <div className='flex justify-between text-xl'>
                    <h3>{preparing_time}</h3>
                    <h3>{calories}</h3>
                </div>
                <button className="btn btn-success">Want to Cook</button>

            </div>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;