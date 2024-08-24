import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import productRedusers from "./features/product/productSlice";
import categorysRedusers from "./features/category/categorySlice";
import ordersRedusers from "./features/order/orderSlice";
import persistStore from "redux-persist/es/persistStore";

const productPersistConfig = {
  key: "products",
  storage,
};
const persistProductReducers = persistReducer(
  productPersistConfig,
  productRedusers
);

const categorysPersistCofig = {
  key: "categorys",
  storage,
};
const persistCategorysReducers = persistReducer(
  categorysPersistCofig,
  categorysRedusers
);

const ordersPersistConfig = {
  key: "orders",
  storage,
};

const persistOrdersReducers = {
  ordersPersistConfig,
  ordersRedusers,
};

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    products: persistProductReducers,
    categorys: persistCategorysReducers,
    orders: persistOrdersReducers,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
