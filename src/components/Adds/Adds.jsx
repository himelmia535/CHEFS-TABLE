import PropTypes from 'prop-types'
import Add from '../Add/Add';

const Adds = ({wantCook}) => {
    
    return (
        <div className="border border-primary rounded-2xl m-2 p-2 bg-slate-100 md:w-2/5">
            {/* Want to cook */}
            <div>
                <h2 className="text-3xl text-center font-semibold">Want to Cook: {wantCook.length}</h2>
                <h5 className="border-b-2 m-2 w-3/4 mx-auto"></h5>
                <div className="flex justify-evenly">
                    <h3>Name</h3>
                    <h3 className=''>Time</h3>
                    <h3 className='mr-10'>Calories</h3>
                </div>
                <div className='mt-4 mb-4'>
                    {
                        wantCook.map(add => <Add key={add.recipe_id} add={add}></Add>)
                    }
                </div>
            </div>
            {/* currently cooking */}
            <div>
                <h2 className="text-3xl text-center font-semibold">Currently Cooking:{}</h2>
                <h5 className="border-b-2 m-2 w-3/4 mx-auto"></h5>
                <div>

                </div>
            </div>
        </div>
    );
};

Adds.PropTypes = {
    wantCook: PropTypes.array
}
export default Adds;