<?php

// Per-site brand + copy shared by the partials (navbar, footer, trust-block, cta, title-meta).

$SITES = [
	'appstore' => [
		'key' => 'appstore',
		'name' => 'Gerege App Store',
		'wordmark' => ['gerege-', 'appstore'],
		'logo' => '/images/appstore-logo.webp',
		'logo_mono' => false,
		'base' => '',
		'login' => 'https://appstore.gerege.mn/login',
		// no public verify page: the last chain row is the install itself
		'verify' => ['url' => null, 'label' => 'Суулгац', 'icon' => '/images/icons3d-white/phone-download.webp'],
		'nav' => [
			['/', 'Нүүр'],
			['/#catalog', 'Каталог'],
			['/#how', 'Хэрхэн ажилладаг'],
			['/architecture', 'Архитектур'],
			['/trust', 'Аюулгүй байдал'],
		],
		'tagline' => 'Gerege Eco System-ийн хаалттай суурь платформ.',
		'description' => 'Gerege App Store нь Gerege Nexus дээр ажилладаг аппуудын албан ёсны каталог. Хувилбар бүр хянагдаж нийтлэгдэх бөгөөд Nexus суулгац бүр каталогийн гарын үсгийг шалгасны дараа л апп суулгана.',
		'keywords' => 'Gerege App Store, Gerege Nexus, апп дэлгүүр, байгууллагын апп, Ed25519, гарын үсэгтэй каталог, eID Mongolia',
		'steps_label' => 'Гурван алхам',
		'trust' => [
			'heading' => ['Нийтлэгчээс суулгац хүртэл ', 'нэг баталгааны гинж'],
			'text' => 'Баталгаажсан нийтлэгч → хянагдсан manifest → гарын үсэгтэй каталог → тогтоосон түлхүүр → суулгац. Алхам бүр шалгагдана.',
			'pills' => ['eID Mongolia', 'Ed25519', 'Audit', 'Pinned key'],
			'chain' => [
				['/images/icons3d-white/user-profile.webp', 'Баталгаажсан нийтлэгч'],
				['/images/icons3d-white/checklist.webp', 'Хянагдсан manifest'],
				['/images/icons3d-white/safe-package.webp', 'Гарын үсэгтэй каталог'],
				['/images/icons3d/keys.webp', 'Тогтоосон түлхүүр'],
			],
			'points' => [
				'Нийтлэгч eID Mongolia-ээр баталгаажна',
				'Нийтлэгч, хянагчийн эрх тусдаа',
				'Ed25519 гарын үсэг, тогтоосон нийтийн түлхүүр',
				'Хяналтын шийдвэр бүр аудитад',
			],
		],
		'trust_hero' => [
			'labels' => [['Аюулгүй', 'байдал'], ['Ed25519', 'signature'], ['eID', 'Mongolia']],
			'heading' => ['Нийтлэгчээс суулгац хүртэл ', 'нэг баталгааны гинж'],
			'text' => 'Алхам бүр шалгагдана: баталгаажсан нийтлэгч, хянагдсан manifest, гарын үсэгтэй каталог, тогтоосон түлхүүр.',
		],
		'cta' => [
			'heading' => ['Аппаа Gerege App Store-д ', 'нийтлээрэй', ''],
			'text' => 'eID Mongolia-ээр нэвтэрч байгууллагаа нийтлэгчээр бүртгүүлээд эхний хувилбараа илгээнэ.',
		],
	],
];

$site = $SITES[$site_key ?? 'appstore'];
$site['nav'] = $site['nav'] ?? [
	[$site['base'] . '/', 'Нүүр'],
	[$site['base'] . '/#how', 'Хэрхэн ажилладаг'],
	[$site['base'] . '/#steps', 'Алхам'],
	[$site['base'] . '/trust', 'Аюулгүй байдал'],
];
