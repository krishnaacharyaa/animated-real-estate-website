export function Filter() {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md">
			<h1 className="text-xl font-bold mb-4">
				Search results for <span className="text-indigo-600">Los Angeles</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
				<div className="flex flex-col">
					<label htmlFor="city" className="text-sm font-medium text-gray-700">
						Location
					</label>
					<input
						type="text"
						id="city"
						name="city"
						placeholder="City Location"
						// onChange={handleChange}
						// defaultValue={query.city}
						className="mt-1 p-2 border border-gray-300 rounded-md"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="type" className="text-sm font-medium text-gray-700">
						Type
					</label>
					<select
						name="type"
						id="type"
						// onChange={handleChange}
						// defaultValue={query.type}
						className="mt-1 p-2 border border-gray-300 rounded-md"
					>
						<option value="">Any</option>
						<option value="buy">Buy</option>
						<option value="rent">Rent</option>
					</select>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="property"
						className="text-sm font-medium text-gray-700"
					>
						Property
					</label>
					<select
						name="property"
						id="property"
						// onChange={handleChange}
						// defaultValue={query.property}
						className="mt-1 p-2 border border-gray-300 rounded-md"
					>
						<option value="">Any</option>
						<option value="apartment">Apartment</option>
						<option value="house">House</option>
						<option value="condo">Condo</option>
						<option value="land">Land</option>
					</select>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="minPrice"
						className="text-sm font-medium text-gray-700"
					>
						Min Price
					</label>
					<input
						type="number"
						id="minPrice"
						name="minPrice"
						placeholder="Any"
						// onChange={handleChange}
						// defaultValue={query.minPrice}
						className="mt-1 p-2 border border-gray-300 rounded-md"
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="maxPrice"
						className="text-sm font-medium text-gray-700"
					>
						Max Price
					</label>
					<input
						type="number"
						id="maxPrice"
						name="maxPrice"
						placeholder="Any"
						// onChange={handleChange}
						// defaultValue={query.maxPrice}
						className="mt-1 p-2 border border-gray-300 rounded-md"
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="bedroom"
						className="text-sm font-medium text-gray-700"
					>
						Bedroom
					</label>
					<input
						type="number"
						id="bedroom"
						name="bedroom"
						placeholder="Any"
						// onChange={handleChange}
						// defaultValue={query.bedroom}
						className="mt-1 p-2 border border-gray-300 rounded-md"
					/>
				</div>
			</div>
			<button
				// onClick={handleFilter}
				className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700"
			>
				Search
			</button>
		</div>
	);
}
