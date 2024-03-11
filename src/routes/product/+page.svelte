<script>
    	import Products from '$lib/components/products.json';

</script>
<div class="bg-base-100">
	<div class="">
		<div class="py-8">
			<!-- #region Body -->

			<!-- #region Product Info -->
			<div class="container grid grid-cols-2 gap-6 mx-auto">
				<div>
					<img src="https://wpdemo.triple-a.io/wp-content/uploads/2022/11/Group-75-300x190.png" alt="product" class="w-full" />
					<div class="grid grid-cols-5 gap-4 mt-4">
						<img
							src="https://wpdemo.triple-a.io/wp-content/uploads/2022/11/Group-75-300x190.png"
							alt="product"
							class="w-full cursor-pointer border border-gray-400"
						/>
						<!-- <img
							src="images/tshirt-side-white-small.png"
							alt="product"
							class="w-full cursor-pointer border"
						/>
						<img
							src="images/tshirt-back-white-small.png"
							alt="product"
							class="w-full cursor-pointer border"
						/> -->
					</div>
				</div>

				<div>
					<h2 class="text-3xl font-semibold  mb-0">Airbnb Digital Gift Card</h2>
					<div class="flex items-center mb-4">
						<div class="flex gap-1 text-sm text-yellow-400">
							<i class="star" />
							<i class="star" />
							<i class="star" />
							<i class="star" />
							<i class="star" />
						</div>
						<!-- <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div> -->
					</div>
					<div class="space-y-2">
						<!-- <p class="text-gray-800 font-semibold space-x-2">
							<span>Availability: </span>
							<span class="text-green-600">In Stock</span>
						</p> -->
						<!-- <p class="space-x-2">
							<span class="text-gray-800 font-semibold">Brand: </span>
							<span class="text-gray-600">Elastic Path</span>
						</p>
						<p class="space-x-2">
							<span class="text-gray-800 font-semibold">Category: </span>
							<span class="text-gray-600">Tops</span>
						</p>
						<p class="space-x-2">
							<span class="text-gray-800 font-semibold">SKU: </span>
							<span class="text-gray-600">10001-W-L</span>
						</p> -->
					</div>
					<div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
						<p class="text-xl text-primary font-semibold">$9.99</p>
						<p class="text-base text-gray-400 line-through">$19.99</p>
					</div>

					<p class="mt-4 text-gray-600">
						Get access to thousands of TV shows and movies with a Netflix Gift Card. Watch the most popular films and shows from any device anywhere. Stream Netflix on your smartphone, tablet, smart TV, or game console.

					</p>

					<!-- <div class="pt-4">
						<h3 class="text-sm text-gray-800 uppercase mb-1">Size</h3>
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
						</div>
					</div> -->

					<div class="mt-4">
						<h3 class="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
						<div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
							<div
								class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
							>
								-
							</div>
							<div class="h-8 w-8 text-base flex items-center justify-center">4</div>
							<div
								class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
							>
								+
							</div>
						</div>
					</div>

					<div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
						<a
							href="#"
							class="bg-green-700 border border-primary text-white px-8 py-2 font-medium uppercase flex items-center gap-2 hover:bg-green-500 transition"
						>
							Add to cart
						</a>
						<a
							href="#"
							class="border border-gray-300 text-gray-600 px-8 py-2 font-medium uppercase flex items-center gap-2 hover:text-primary transition"
						>
							<i class="gg-heart" /> Wishlist
						</a>
					</div>
                    <div class="product-trust-badge pt-5 p-15 bg-base-300  flex flex-col items-center">
                        <div class="trust-badge-image" style="width: 350px;">
                            <img loading="lazy" src="https://wpdemo.triple-a.io/wp-content/uploads/2022/11/Group-101.png" width="315" height="20" alt="Secure checkout" class="attachment-full size-full">
                        </div>
                        <div class="trust-badge-text py-5">
                            Guaranteed safe &amp; secure checkout
                        </div>
                    </div>
                </div>
			</div>
			<!-- #endregion Product Info -->

			<!-- description -->
			<div class="container py-16 mx-auto">
				<h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
					Product details
				</h3>
				<div class="w-3/5 pt-6">
					<div class="text-gray-600">
						<p class="py-4">
							Get access to thousands of TV shows and movies with a Netflix Gift Card. Watch the most popular films and shows from any device anywhere. Stream Netflix on your smartphone, tablet, smart TV, or game console.
                        </p>
						<p class="py-4">
                            Watch exclusive Netflix movies and shows with unlimited streaming. Funds can be added to any existing Netflix account or used with a new account.

                            Netflix Gift Cards make a perfect gift for birthdays, holidays, stocking stuffers, and graduation or as a simple way to say ‘thank you’. Give the gift of entertainment with a gift card for Netflix
                        </p>
					</div>
<!--
					<table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
						<tr>
							<th class="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
							<th class="py-2 px-4 border border-gray-300">White</th>
						</tr>
						<tr>
							<th class="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
							<th class="py-2 px-4 border border-gray-300">Cotton</th>
						</tr>
						<tr>
							<th class="py-2 px-4 border border-gray-300 w-40 font-medium">Size</th>
							<th class="py-2 px-4 border border-gray-300">Large</th>
						</tr>
					</table> -->
				</div>
			</div>
			<!-- ./description -->

			<!-- related product -->
			<div class="container pb-16 mx-auto">
				<h2 class="text-2xl font-medium text-gray-800  mb-6">Related products</h2>
                <div class="grid grid-cols-4 gap-6">
                    {#each Products.item.slice(0, 4) as product, index}
                        <div class="bg-white  overflow-hidden">
                            <div class="relative group">
                                <img
                                    src="https://wpdemo.triple-a.io/wp-content/uploads/2022/11/Group-75-300x190.png"
                                    alt="product 1"
                                    class="w-full"
                                />
                                <div
                                    class="absolute inset-0 bg-black bg-opacity-0 flex items-center
                                justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                                >
                                <a
                                    style="width: 80%"
                                    href="#"
                                    class="block rounded-full w-80 p-2 text-center text-black bg-white  hover:bg-black hover:text-white transition absolute bottom-3 left-0 right-0 mx-auto"
                                    >Add to cart</a
                                >

                                </div>
                            </div>
                            <div class="pt-2 pb-3 pl-0 pr-2">
                                <a href="#">
                                    <h4
                                        class=" font-medium text-sm mb-0 text-gray-800 hover:text-primary transition"
                                    >
                                    <a href="/product" class="hover:font-semibold text-black">
                                        {product.title}
                                    </a>                                    </h4>
                                </a>
                                <div class="flex items-baseline mb-1 space-x-2">
                                    <p class="text-sm text-black font-semibold">{product.price}</p>
                                </div>

                            </div>

                        </div>
                    {/each}
                </div>
			</div>
			<!-- ./related product -->

			<!-- #endregion Body -->
		</div>
	</div>
</div>

<!-- #endregion Footer -->
