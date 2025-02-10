import { createRouter, createWebHistory } from "vue-router";
import { useHead } from "@vueuse/head";
const routes = [
  {
    path: "/",
    component: () => import("./pages/base.vue"),
    children: [
      {
        path: "",
        component: () => import("./pages/main.vue"),
        meta: { title: "Главная", description: "Добро пожаловать на главную страницу" }
      },
      {
        path: "stocks",
        component: () => import("./pages/stocks.vue"),
        meta: { title: "Акции", description: "Актуальные акции и предложения" }
      },
      {
        path: "stocks/:id",
        component: () => import("./pages/stocks/socksId.vue"),
        meta: { title: "Детали акции" }
      },
      {
        path: "discounts",
        component: () => import("./pages/discounts.vue"),
        meta: { title: "Скидки" }
      },
      {
        path: "loyalty",
        component: () => import("./pages/loyalty.vue"),
        meta: { title: "Программа лояльности" }
      },
      {
        path: "about",
        component: () => import("./pages/about.vue"),
        meta: { title: "О нас" }
      },
      {
        path: "career",
        component: () => import("./pages/career.vue"),
        meta: { title: "Карьера" }
      },
      {
        path: "providers",
        component: () => import("./pages/providers.vue"),
        meta: {title: 'Поставщикам'}
      },
      {
        path: "rental",
        component: () => import("./pages/rental.vue"),
        meta: {title: 'Арендодателям'}
      },
      {
        path: 'advertisers',
        component:() => import("./pages/advertisers.vue"),
        meta: {title: 'Рекламодателям'}
      },
      {
        path: "contacts",
        component: () => import("./pages/contacts.vue"),
        meta: { title: "Контакты" }
      },
      {
        path: 'locations',
        component: () => import("./pages/locations.vue"),
        meta: {title: "Магазины"}
      },
      {
        path: 'product/:id',
        component: () => import('./pages/product/productId.vue'),
        meta: {title: 'Детали продукта'}
      },
      {
        path: 'news',
        component: () => import("./pages/news.vue"),
        meta: {title: 'Новости'}
      },
      {
        path: '/news/:id',
        component: () => import('./pages/news/newsId.vue'),
        meta: {title: 'Детали новостей'}
      }
    ]
  },
  {
    path: "/sign-in",
    component: () => import("./pages/sign-in/sign-in.vue"),
    children: [
      {
        path: "",
        component: () => import("./pages/sign-in/sign-inBase.vue"),
        meta: { title: "Вход" }
      },
      {
        path: "sign-up",
        component: () => import("./pages/sign-in/sign-up.vue"),
        children: [
          {
            path: "sign-upData",
            component: () => import("./pages/sign-in/sign-upData.vue"),
            meta: { title: "Регистрация" }
          }
        ]
      }
    ]
  },
  {
    path: "/profile",
    component: () => import("./pages/profile/base.vue"),
    children: [
      {
        path: "",
        component: () => import("./pages/profile/main.vue"),
        meta: { title: "Профиль" }
      },
      {
        path: "offers",
        component: () => import("./pages/profile/offers.vue"),
        meta: { title: "Предложения" }
      },
      {
        path: 'coupons',
        component: () => import("./pages/profile/coupons.vue"),
        meta: {title: 'Купоны'}
      },
      {
        path: 'shopping-list',
        component: () => import("./pages/profile/shoppingList.vue"),
        meta: {title: 'Список покупок'}
      },
      {
        path: 'actions',
        component: () => import("./pages/profile/actions.vue"),
        meta: {title: 'Описание программы'}
      },
      {
        path: 'tariff-information',
        component: () => import("./pages/profile/tarrif-information.vue"),
        meta: {title: 'Программа лояльности'}
      },
    ]
  },
  {
    path: "/admin",
    component: () => import("./pages/admin.vue"),
    children: [
      {
        path: "",
        component: () => import("./pages/admin/adminMain.vue"),
        meta: { title: "Админ-панель" }
      },
      {
        path: "products",
        component: () => import("./pages/admin/products.vue"),
        meta: { title: "Управление товарами" }
      },
      {
        path: 'products/add-product',
        component: () => import('./pages/admin/addProduct.vue'),
        meta: {title: 'Добавление товаров'}
      },
      {
        path: 'discounts',
        component: () => import("./pages/admin/discounts.vue"),
        meta: {title: 'Управление скидками'}
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  useHead({
    title: to.meta.title || "Baraka Market",
    meta: [
      { name: "description", content: "Сеть магазинов" }
    ]
  });
});

export default router;
