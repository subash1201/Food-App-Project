import { Fragment } from 'react';
import AvailabeMeals from './AvailableMeals';
import MealsSummary from "./MealsSummary";

const Meals = props => {
    return <Fragment>
        <MealsSummary />
        <AvailabeMeals />
    </Fragment>
}

export default Meals;