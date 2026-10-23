<?php

// Per-site brand + copy shared by the partials (navbar, footer, trust-block, cta, title-meta).

$SITES = [
	'notary' => [
		'key' => 'notary',
		'name' => 'e-Notary',
		'wordmark' => ['e-', 'notary'],
		'logo' => '/images/notary-logo.png',
		'logo_mono' => false,
		'logo_tint' => true, // painted with --accent, same as the buttons
		'base' => '',
		'login' => 'https://enotary.mn/login',
		'verify' => ['url' => 'https://enotary.mn/verify', 'label' => 'enotary.mn/verify'],
		'tagline' => 'Нотариатын цахим платформ.',
		'description' => 'e-Notary — нотариатын үйлчилгээг цахимаар авах платформ. eID-ээр нэвтэрч хүсэлтээ илгээж, баримтаа хавсаргаж, нотариатчийн бэлтгэсэн актад утсаараа гарын үсэг зурна.',
		'keywords' => 'цахим нотариат, e-Notary, нотариатын үйлчилгээ, eID Mongolia, PAdES, итгэмжлэл, гэрчлэлт',
		'steps_label' => 'Гурван алхам',
		'trust' => [
			'heading' => ['Хуулийн хүчинтэй ', 'цахим акт'],
			'text' => 'eID-ийн мэргэшсэн гарын үсэг (PAdES), цагийн тамга, бүртгэлийн дугаар — хэн ч enotary.mn/verify дээр шалгана.',
			'pills' => ['PIN2', 'PAdES', 'Timestamp', 'Verify'],
			'chain' => [
				['/images/icons3d/badge-glass.webp', 'eID-ийн мэргэшсэн гарын үсэг (PAdES)'],
				['/images/icons3d-white/hourglass.webp', 'Цагийн тамга'],
				['/images/icons3d-white/checklist.webp', 'Бүртгэлийн дугаар'],
			],
			'points' => [
				'PIN2-оор баталгаажсан гарын үсэг',
				'Баримтыг зөвхөн талууд, нотариатч хардаг',
				'Нотариатын тухай хуулийн дагуу бүртгэл',
				'Акт бүр нийтэд шалгагдана',
			],
		],
		'trust_hero' => [
			'labels' => [['Аюулгүй', 'байдал'], ['Цахим', 'акт'], ['eID', 'Mongolia']],
			'heading' => ['Хуулийн хүчинтэй ', 'цахим акт'],
			'text' => 'PIN2-оор баталгаажсан гарын үсэг. Акт бүр бүртгэлийн дугаартай, нийтэд шалгагдана.',
		],
		'cta' => [
			'heading' => ['Нотариатын хүсэлтээ ', 'өнөөдөр', ' илгээ'],
			'text' => 'eID Mongolia-ээр нэвтрээд хүсэлтээ нэг минутад илгээнэ.',
		],
	],
];

$site = $SITES[$site_key ?? 'notary'];
$site['nav'] = $site['nav'] ?? [
	[$site['base'] . '/', 'Нүүр'],
	[$site['base'] . '/#how', 'Хэрхэн ажилладаг'],
	[$site['base'] . '/#steps', 'Алхам'],
	[$site['base'] . '/trust', 'Аюулгүй байдал'],
];
