function all() {
	const data = new Promise(resolve => {
		setTimeout(() => resolve([
				{
					id: 1,
					title: 'Телефон',
					price: 50000,
					amount: 10,
					maxPerPerson:2
				},
				{
					id: 2,
					title: 'Телевизор',
					price:60000,
					amount: 5,
					maxPerPerson:1
				},
				{
					id: 3,
					title: 'Компьютер',
					price: 40000,
					amount: 2,
					maxPerPerson:5
				}
			]
		), 1000)
	})
	return data
}

export { all }
