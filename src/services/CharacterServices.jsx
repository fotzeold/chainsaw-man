const CharacterServices = () => {
	const characters = [
		{
			name: 'Denji',
			url: 'https://chainsaw-man.fandom.com/wiki/Denji',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_1_stand.png',
			descriptions: 'Denji, also known as Chainsaw Man, is the titular main protagonist of the 2018 dark fantasy manga series Chainsaw Man and its 2022 anime television series adaptation of the same name.'
		},
		{
			name: 'Pochita',
			url: 'https://chainsaw-man.fandom.com/wiki/Pochita',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_5_stand.png',
			descriptions: 'Pochita is the titular overarching protagonist of the Chainsaw Man series. He is Denji’s best friend that has been with him since his childhood and would later on make a contract with him, in exchange for showing him his dreams'
		},
		{
			name: 'Makima',
			url: 'https://chainsaw-man.fandom.com/wiki/Makima',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_2_stand.png',
			descriptions: 'She is the leader of the Public Safety Devil Hunter organization who takes Denji under her wing, giving him a happy life compared to the suffering that he endured during his childhood days. Initially acting as a helpful ally, she is later revealed to be a powerful and omniscient devil as old as the history of humanity known as the Control Devil who was feared by human beings for several centuries and several other nations, including the United States.'
		},
		{
			name: 'Aki Hayakawa',
			url: 'https://chainsaw-man.fandom.com/wiki/Aki_Hayakawa',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_4_stand.png',
			descriptions: 'He is a Public Safety Devil Hunter under Makimas squad. Assigned to handle Denji and Pochita, Aki is revealed to be contracted to several Devils such as the Curse Devil and the Future Devil.'
		},
		{
			name: 'Power',
			url: 'https://chainsaw-man.fandom.com/wiki/Power',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_3_stand.png',
			descriptions: 'Power was a Fiend and the current incarnation of the Blood Devil, the devil that represented the fear of blood. She was the partner of the human/devil hybrid Denji, and served under Makima in Tokyo Special Division 4 of the Public Safety Devil Hunters. Although narcissistic and mostly self-serving, she eventually formed genuine friendships with Denji and fellow Devil Hunter Aki Hayakawa.'
		},
		{
			name: 'Himeno',
			url: 'https://chainsaw-man.fandom.com/wiki/Himeno',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_6_stand.png',
			descriptions: 'Himeno is a supporting character in the Chainsaw Man series. She’s Aki’s former Devil Hunter partner who has a crush on him and is part of the 4th Special Division of the Public Safety Devil Hunters. She has a contract with the Ghost Devil.'
		},
		{
			name: 'Kobeni Higashiyama',
			url: 'https://chainsaw-man.fandom.com/wiki/Kobeni_Higashiyama',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_7_stand.png',
			descriptions: 'Kobeni Higashiyama is a major supporting character in the Chainsaw Man series. She is a Public Safety Devil Hunter who started as a member of Makima’s experimental squad until she was later transferred to the Tokyo Special Division'
		},
		{
			name: 'Hirokazu Arai',
			url: 'https://chainsaw-man.fandom.com/wiki/Hirokazu_Arai',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_8_stand.png',
			descriptions: 'Hirokazu Arai was a Public Safety Devil Hunter. He was a new recruit working under Makima’s special squad paired up with Kobeni Higashiyama.'
		},
		{
			name: 'Kishibe',
			url: 'https://chainsaw-man.fandom.com/wiki/Kishibe',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_9_stand.png',
			descriptions: 'Kishibe is a supporting character in the Chainsaw Man series. He is a Public Safety Devil Hunter. He was formely part of Tokyo Special Division 1, he later became the captain of the Tokyo Special Division 4 after the assault on the Special Divisions.'
		},
		{
			name: 'Angel Devil',
			url: 'https://chainsaw-man.fandom.com/wiki/Angel_Devil',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_10_stand.png',
			descriptions: 'Angel is a younger androgynous male seen to be wearing the Public Safety suit. He has shoulder-length hair, depicted as vermilion red in the official colored manga, with a halo floating above it and white wings on his upper back. After the events of the International Assassins arc, Angel loses both of his arms.'
		},
		{
			name: 'Beam',
			url: 'https://chainsaw-man.fandom.com/wiki/Beam',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_11_stand.png',
			descriptions: 'Beam possesses the body of a muscular young man and as a fiend his sharks snout and fin replace of the top half of his head; he has no visible eyes. He has short, spiky black hair and very sharp teeth. He exclusively wears swimming trunks. When he partially transforms into his devil form, his head becomes a massive sharks head with three pairs of eyes. In his full transformation, his entire body resembles a shark but with multiple sets of long fins that he uses as legs.'
		},
		{
			name: 'Galgali',
			url: 'https://chainsaw-man.fandom.com/wiki/Galgali',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_12_stand.png',
			descriptions: 'Galgali possesses the corpse of a fairly thin man and is dressed in a suit with a hood, and wears a plague doctor gas mask which covers his features.[1] In the colored manga, Galgalis mask is colored in a very bright green, red and orange that looks like the colors of a parrot. In the anime, the mask has more muted colors, such as grey and beige, and some yellow. When he doesnt have his plague doctor mask on, he becomes much taller, very muscular, has spiky black hair, and has 4 empty eyes.'
		},
		{
			name: 'Princi',
			url: 'https://chainsaw-man.fandom.com/wiki/Princi',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_13_stand.png',
			descriptions: 'Princi resembles a young woman with waist-length black hair. She has eight legs ending in scythe-like curved points which are sharp enough to stab through flesh. She appears to have a zipper in the center of her face with the pull under her chin to unzip upwards. She normally wears a shirt and elaborate bow-tie with a knee-length skirt.'
		},
		{
			name: 'Akane Sawatari',
			url: 'https://chainsaw-man.fandom.com/wiki/Akane_Sawatari',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_14_stand.png',
			descriptions: 'Akane is a petite young woman that has short blonde hair with dark brown roots, and her red eyes possess slit pupils like a snake. She usually has a neutral or bored expression, with her hands in her hoodies pockets. She normally wears black shorts and a red oversized hoodie. She also wears orange and white Nike Airmax 97s. In a photo that was taken of her while she was dealing guns, she could be seen wearing a tracksuit.'
		},
		{
			name: 'Katana Man',
			url: 'https://chainsaw-man.fandom.com/wiki/Katana_Man',
			thumbnail: 'https://chainsawman.dog/assets/img/chara/chara_15_stand.png',
			descriptions: 'The Katana man is selfish and cruel. He only cares about killing Denji and forcing him to apologize for killing the Katana Mans grandfather. He will sacrifice innocent people and even his own comrades to do so, being willing to cut through them just to get to Denji. He has shown a complete disbelief in Denjis excuse that he killed his grandfather because he was a zombie, and accused Denji of being a liar. He loves his grandfather despite knowing he was a Yakuza boss because he viewed his grandfather as a man of principles who had only killed a handful of women and children.'
		}
	];

	return { characters }
}

export default CharacterServices;