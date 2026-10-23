<?php

// Per-site brand + copy shared by the partials (navbar, footer, trust-block, cta, title-meta).

$SITES = [
	'contract' => [
		'key' => 'contract',
		'name' => 'Gerege Contract',
		'wordmark' => ['gerege-', 'contract'],
		'logo' => '/images/contract-logo.png',
		'logo_mono' => true,
		'base' => '',
		'login' => 'https://contract.mn/login',
		'verify' => ['url' => 'https://contract.mn/verify', 'label' => 'contract.mn/verify'],
		'tagline' => 'eID-ээр гэрээ байгуулах платформ.',
		'description' => 'Gerege Contract — загвараасаа гэрээ үүсгээд талуудаа регистрээр нэрлэнэ. Тал бүр eID Mongolia аппаараа ээлжээрээ тоон гарын үсэг зурна — уулзах, хэвлэх, скан хийх шаардлагагүй.',
		'keywords' => 'цахим гэрээ, тоон гарын үсэг, eID Mongolia, PAdES, гэрээ байгуулах, Gerege Contract',
		'steps_label' => 'Гурван алхам',
		'trust' => [
			'heading' => ['Гарын үсэг PDF дотроо, ', 'шалгалт хэн бүхэнд нээлттэй'],
			'text' => 'eID-ийн мэргэшсэн гэрчилгээ → PAdES-BASELINE-LT → цагийн тамга → contract.mn/verify. Файлаа хаана ч бие даан шалгана.',
			'pills' => ['PIN2', 'PAdES-BASELINE-LT', 'Timestamp', 'Verify'],
			'chain' => [
				['/images/icons3d/badge-glass.webp', 'eID-ийн мэргэшсэн гэрчилгээ'],
				['/images/icons3d/scroll.webp', 'PAdES-BASELINE-LT'],
				['/images/icons3d-white/hourglass.webp', 'Цагийн тамга'],
			],
			'points' => [
				'PIN2-оор баталгаажсан мэргэшсэн гарын үсэг',
				'Гэрээг зөвхөн талууд нь хардаг',
				'Цагийн тамга, гэрчилгээний хүчинтэй байдлын баталгаа',
				'Гэрээ бүр шалгах кодтой',
			],
		],
		'trust_hero' => [
			'labels' => [['Аюулгүй', 'байдал'], ['PAdES', 'baseline-lt'], ['eID', 'Mongolia']],
			'heading' => ['Хуулийн хүчинтэй, ', 'хэн ч шалгах боломжтой гарын үсэг'],
			'text' => 'Тал бүр eID Mongolia аппаараа PIN2-оор зурна. Гарын үсэг бүр PDF дотроо хадгалагдана.',
		],
		'cta' => [
			'heading' => ['Анхны гэрээгээ ', 'өнөөдөр', ' байгуул'],
			'text' => 'eID Mongolia-ээр нэвтрээд гэрээгээ нэг минутад илгээнэ.',
		],
	],
];

$site = $SITES[$site_key ?? 'contract'];
$site['nav'] = $site['nav'] ?? [
	[$site['base'] . '/', 'Нүүр'],
	[$site['base'] . '/#how', 'Хэрхэн ажилладаг'],
	[$site['base'] . '/#steps', 'Алхам'],
	[$site['base'] . '/trust', 'Аюулгүй байдал'],
];
