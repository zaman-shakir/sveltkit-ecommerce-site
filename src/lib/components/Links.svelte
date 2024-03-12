<script>
    import Products from "$lib/components/products.json";
    //console.log(Products);
    let price = 14.99;
</script>

<div
    class=" flex items-center justify-between p-2 lg:container lg:mx-auto pb-10"
>
    <div class="">
        Home <span class="mx-5">></span> Products
    </div>
</div>

<!--
<div class="flex flex-col md:flex-row gap-2 xl:gap-5">
	<a
		class="w-full  rounded-lg p-4 text-xl font-bold text-center  transition-all duration-300"
		href="/"
	>

		<div class="flex flex-col items-center">
            <img
			class="w-48 sm:w-56 lg:w-64 xl:w-72 rounded-lg shadow-lg h-[143px]"
			src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
			alt="Burger"
		    />
            <div class="mt-2">
                <div class="">
                    Product name - $99
                </div>
            </div>
            <div class="btn btn-active mt-2"> Add to Cart</div>
            </div>
	</a>

</div> -->
<!-- Links.svelte -->
<!-- <div class="flex flex-col md:flex-row gap-2 xl:gap-5"> -->
<div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start mx-auto">
    <!-- #region Sidebar -->
    <div class="col-span-1 px-4 pb-6 overflow-hidden">
        <div class=" space-y-5">
            <div class="pt-5">
                <p class="font-semibold text-4xl">Filters</p>
            </div>
            <div>
                <h3 class="text-lg text-gray-800 mb-3 font-medium">
                    Categories
                </h3>
                <div class="space-y-2">
                    <div class="flex items-center">
                        <label
                            for="cat-1"
                            class="text-gray-600 ml-0 cusror-pointer"
                            >Retail</label
                        >
                    </div>
                    <div class="flex items-center">
                        <label
                            for="cat-1"
                            class="text-gray-600 ml-0 cusror-pointer"
                            >Entertainment</label
                        >
                    </div>
                    <div class="flex items-center">
                        <label
                            for="cat-1"
                            class="text-gray-600 ml-0 cusror-pointer"
                            >Gaming</label
                        >
                    </div>
                    <div class="flex items-center">
                        <label
                            for="cat-1"
                            class="text-gray-600 ml-0 cusror-pointer"
                            >Food</label
                        >
                    </div>
                    <div class="flex items-center">
                        <label
                            for="cat-1"
                            class="text-gray-600 ml-0 cusror-pointer"
                            >Travel</label
                        >
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-lg text-gray-800 mb-3 font-medium">Price</h3>
                <div class="space-y-2">
                    <div class="flex items-center">
                        <label
                            for="cat-1"
                            class="text-gray-600 ml-0 cusror-pointer">All</label
                        >
                    </div>
                    <div class="flex items-center">
                        <label
                            for="cat-1"
                            class="text-gray-600 ml-0 cusror-pointer"
                            >$0.00 - $40.00</label
                        >
                    </div>
                    <div class="flex items-center">
                        <label
                            for="cat-1"
                            class="text-gray-600 ml-0 cusror-pointer"
                            >$40.00 - $80.00</label
                        >
                    </div>
                    <div class="flex items-center">
                        <label
                            for="cat-1"
                            class="text-gray-600 ml-0 cusror-pointer"
                            >$80.00 - $120.00</label
                        >
                    </div>
                    <div class="flex items-center">
                        <label
                            for="cat-1"
                            class="text-gray-600 ml-0 cusror-pointer"
                            >$120.00 - $200</label
                        >
                    </div>
                </div>
            </div>

            <!-- <div class="pt-4">
				<h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
				<div class="space-y-2">
					<div class="flex items-center">
						<input
							type="checkbox"
							name="brand-1"
							id="brand-1"
							class="text-primary focus:ring-0 cursor-pointer"
						/>
						<label for="brand-1" class="text-gray-600 ml-3 cusror-pointer">Acme</label>
						<div class="ml-auto text-gray-600 text-sm">(15)</div>
					</div>
					<div class="flex items-center">
						<input
							type="checkbox"
							name="brand-2"
							id="brand-2"
							class="text-primary focus:ring-0 cursor-pointer"
						/>
						<label for="brand-2" class="text-gray-600 ml-3 cusror-pointer">Elastic Path</label>
						<div class="ml-auto text-gray-600 text-sm">(9)</div>
					</div>
				</div>
			</div>

			<div class="pt-4">
				<h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
				<div class="mt-4 flex items-center">
					<input
						type="text"
						name="min"
						id="min"
						class="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
						placeholder="min"
					/>
					<span class="mx-3 text-gray-500">-</span>
					<input
						type="text"
						name="max"
						id="max"
						class="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
						placeholder="max"
					/>
				</div>
			</div>

			<div class="pt-4">
				<h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
				<div class="flex items-center gap-2">
					<div class="size-selector">
						<input type="radio" name="size" id="size-xs" class="hidden" />
						<label
							for="size-xs"
							class="text-xs border border-gray-200 h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
							>XS</label
						>
					</div>
					<div class="size-selector">
						<input type="radio" name="size" id="size-sm" class="hidden" />
						<label
							for="size-sm"
							class="text-xs border border-gray-200 h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
							>S</label
						>
					</div>
					<div class="size-selector">
						<input type="radio" name="size" id="size-m" class="hidden" />
						<label
							for="size-m"
							class="text-xs border border-gray-200 h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
							>M</label
						>
					</div>
					<div class="size-selector">
						<input type="radio" name="size" id="size-l" class="hidden" />
						<label
							for="size-l"
							class="text-xs border border-gray-200 h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
							>L</label
						>
					</div>
					<div class="size-selector">
						<input type="radio" name="size" id="size-xl" class="hidden" />
						<label
							for="size-xl"
							class="text-xs border border-gray-200 h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
							>XL</label
						>
					</div>
				</div>
			</div>

			<div class="pt-4">
				<h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
				<div class="flex items-center gap-2">
					<div class="color-selector">
						<input type="radio" name="color" id="black" class="hidden" />
						<label
							for="black"
							class="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
							style="background-color: #000;"
						/>
					</div>
					<div class="color-selector">
						<input type="radio" name="color" id="white" class="hidden" />
						<label
							for="white"
							class="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
							style="background-color: #fff;"
						/>
					</div>
					<div class="color-selector">
						<input type="radio" name="color" id="gray" class="hidden" />
						<label
							for="gray"
							class="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
							style="background-color: #a4a9ad;"
						/>
					</div>
					<div class="color-selector">
						<input type="radio" name="color" id="blue" class="hidden" />
						<label
							for="blue"
							class="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
							style="background-color: #0033cc;"
						/>
					</div>
					<div class="color-selector">
						<input type="radio" name="color" id="navy" class="hidden" />
						<label
							for="navy"
							class="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
							style="background-color: #091740;"
						/>
					</div>
					<div class="color-selector">
						<input type="radio" name="color" id="red" class="hidden" />
						<label
							for="red"
							class="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
							style="background-color: #990000;"
						/>
					</div>
				</div>
			</div> -->
        </div>
    </div>
    <!-- #endregion Sidebar -->

    <!-- #region Products -->
    <div class="col-span-3">
        <div class="flex items-center mb-4">
            <p>Showing 06 of 06 results</p>

            <div class="flex gap-2 ml-auto">
                <select
                    name="sort"
                    id="sort"
                    class="menu w-44 mr-10 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                >
                    <option selected value="">Default sorting</option>
                    <option value="price-low-to-high">Popularity</option>
                    <option value="price-high-to-low">Latest</option>
                    <option value="latest">Price: low to high</option>
                    <option value="latest">Price: high to low</option>
                </select>
                <!-- <div
					class="border border-gray-900 w-10 h-9 flex items-center justify-center text-gray-600 cursor-pointer"
				>
					<i class="gg-layout-grid" />
				</div>
				<div
					class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 cursor-pointer"
				>
					<i class="gg-layout-list" />
				</div> -->
            </div>
        </div>

        <div class="grid grid-cols-4 gap-6">
            {#each Products.item.slice(0, 6) as product, index}
                <div class="bg-white overflow-hidden">
                    <div class="relative group">
                        <img
                            src={product.image_link}
                            alt={product.title}
                            class="w-full"
                        />
                        <div
                            class="absolute inset-0 bg-black bg-opacity-0 flex items-center
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                        >
                            <a
                                style="width: 80%"
                                href="/#/"
                                class="block rounded-full w-80 p-2 text-center text-black bg-white hover:bg-black hover:text-white transition absolute bottom-3 left-0 right-0 mx-auto"
                                >Add to cart</a
                            >
                        </div>
                    </div>
                    <div class="pt-2 pb-3 pl-0 pr-2">
                        <a href="/#/">
                            <h4
                                class=" font-medium text-sm mb-0 text-gray-800 hover:text-primary transition"
                            >
                                <a
                                    href="/product"
                                    class="hover:font-semibold text-black"
                                >
                                    {product.title}
                                </a>
                            </h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-sm text-black font-semibold">
                                {product.price}
                            </p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <!-- #endregion Products -->
</div>
<!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
	{#each Products.item.slice(0, 6) as product, index}
		<a
			class="w-full  p-4 text-xl font-bold text-center transition-all duration-300"
			href="/"
		>
			<div class="flex flex-col items-center">
				<img
					class="w-48 sm:w-56 lg:w-64 xl:w-72  h-[143px]"
					src={product.image_link}
					alt="Burger"
				/>
				<div class="mt-2">
					<div class="">
						{product.title} - ${price}
					</div>
				</div>
				<div class="btn btn-active mt-2">Add to Cart</div>
			</div>
		</a>
	{/each}
</div> -->
<!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    {#each Products.item.slice(0, 6) as product, index}
    <a class="w-full rounded-lg p-4 text-xl font-bold text-center transition-all duration-300" href="/">
        <div class="flex flex-col items-center">
            <img class="w-full rounded-lg shadow-lg object-cover h-[143px] sm:h-[160px] lg:h-[176px] xl:h-[192px]" src={product.image_link} alt="Product" />
            <div class="mt-2">
                <div>{product.title} - ${price}</div>
            </div>
            <div class="btn btn-active mt-2"> Add to Cart</div>
        </div>
    </a>
    {/each}
</div> -->
