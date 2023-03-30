import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProductsActionCreators from "./actions/products.actions";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(
        ProductsActionCreators,
        dispatch
    );
};
