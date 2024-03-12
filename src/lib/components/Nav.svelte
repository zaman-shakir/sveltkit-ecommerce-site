<script lang="ts">
    import "$lib/app.css";
    import Drawer from "./Drawer.svelte";
    //import { faCoffee } from '@fortawesome/free-solid-svg-icons';

    const themes = ["light"];
</script>

<div class="bg-base-100 sticky top-0 z-40 pb-10">
    <div
        class="flex items-center justify-center py-3 border-b-2 border-black-500"
    >
        <div class="">
            <p class="text-center nav-top">
                Shop digital gift cards for every occasion.
            </p>
        </div>
    </div>

    <div class="container mx-auto px-6 py-3 hidden">
        <div class="flex items-center justify-between">
            <div class="hidden w-full text-gray-600 md:flex md:items-center">
                <i class="gg-profile"></i>
            </div>
            <div
                class="w-full text-blue-900 md:text-center font-mono text-4xl font-semibold uppercase tracking-widest"
            >
                Acme
            </div>
            <div class="flex items-center justify-end w-full">
                <button class="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                    <i class="gg-shopping-cart"></i>
                </button>

                <div class="flex sm:hidden">
                    <button
                        type="button"
                        class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                        aria-label="toggle menu"
                    >
                        <i class="gg-menu-grid-r"></i>
                    </button>
                </div>
            </div>
        </div>
        <nav class="sm:flex sm:justify-center sm:items-center mt-4">
            <div class="flex flex-col sm:flex-row">
                <a
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    href="index.html">Home</a
                >
                <a
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    href="category.html">Category</a
                >
                <a
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    href="product.html">Product</a
                >
                <a
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    href="cart.html">Cart</a
                >
                <a
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    href="contact.html">Contact</a
                >
            </div>
        </nav>
        <div class="relative mt-6 max-w-lg mx-auto">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <i class="gg-search"></i>
            </span>

            <input
                class="pl-10 block w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                type="text"
                placeholder="Search"
            />
        </div>
    </div>

    <div class="flex items-center justify-between p-2 lg:container lg:mx-auto">
        <div class="">
            <a href="/" class="font-bold text-primary text-xl"
                ><img
                    fetchpriority="high"
                    src="https://wpdemo.triple-a.io/wp-content/uploads/2022/10/crypto-dark.svg"
                    class="logo dark-logo"
                    width="250"
                    height="42"
                    alt="CryptoGiftCards"
                />
            </a>
        </div>
        <div class="">
            <div class="flex flex-col sm:flex-row" style="margin-left:-60px">
                <a
                    class="mt-3 font-semibold text-black hover:underline sm:mx-3 sm:mt-0"
                    href="/">Shop</a
                >
                <a
                    class="mt-3 font-semibold text-black hover:underline sm:mx-3 sm:mt-0"
                    href="/">All Categories</a
                >
            </div>
        </div>

        <div class="">
            <label for="my-acc" class="btn btn-primary"
                ><span id="my-acc">My Account</span></label
            >
            <a href="/cart"
                ><label for="my-cart" class="btn btn-primary"
                    ><span id="my-cart">Cart</span></label
                ></a
            >
        </div>
    </div>
    <!-- <div class="flex items-center justify-between p-2 lg:container lg:mx-auto pb-10">
		<div class="">

			Home    <span class="mx-5">></span>   Products
		</div>

	</div> -->
</div>
