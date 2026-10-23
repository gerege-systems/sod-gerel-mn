<?php

// Published apps, mirrored from appstore.gerege.mn (catalog section).
// Each app: name, version, description, package id, 3D icon.

$CATALOG = [
	'Ажил' => [
		['name' => 'Tasker', 'version' => 'v0.10.0', 'desc' => 'Даалгавар, төсөл, ажилтан, алба хэлтэс нэг дор: ажил оноож хянах, хүн бүрийн ачааллыг харах, AI туслахаар яриагаар даалгаврын ноорог гаргаж батлах.', 'pkg' => 'io.gerege.nexus.tasker', 'icon' => '/images/icons3d-white/checklist.webp'],
	],
	'Гэрээ' => [
		['name' => 'Гэрээ', 'version' => 'v1.4.1', 'desc' => 'Гэрээгээ бичиж эсвэл PDF хавсаргаад талуудаа нэрлэнэ — тал бүр өөрийн eID-ээр гарын үсэг зурна.', 'pkg' => 'mn.contract.contracts', 'icon' => '/images/icons3d-white/task-clipboard.webp'],
	],
	'Платформ' => [
		['name' => 'API гарц', 'version' => 'v1.0.0', 'desc' => 'Байгууллагынхаа HTTP API-г түүнийг дууддаг системүүдэд нээх: API бүрд нэг хаяг, дуудагч бүрд түлхүүр, хурдны хязгаар, дуудлага бүрийн өдрийн тоо.', 'pkg' => 'io.gerege.nexus.api_gateway', 'icon' => '/images/icons3d-white/share.webp'],
		['name' => 'Апп нийтлэлт', 'version' => 'v2.0.0', 'desc' => 'Апп нийтлэх, илгээсэн хувилбарыг хянах, Gerege Nexus-ийн бүх инстанс уншдаг гарын үсэгтэй каталогийг удирдах.', 'pkg' => 'io.gerege.nexus.appstore_registry', 'icon' => '/images/icons3d-white/rocket.webp'],
		['name' => 'Бүртгэл', 'version' => 'v2.0.0', 'desc' => 'Байгууллагын хэлтэс нэгж, ажилтнууд, түүнчлэн харилцагч, үйлчлүүлэгч, нийлүүлэгчдийн бүртгэл — дотор, гадна хоёр тал нэг дор.', 'pkg' => 'io.gerege.nexus.organisation', 'icon' => '/images/icons3d-white/user-profile.webp'],
		['name' => 'SSO клиентүүд', 'version' => 'v2.1.0', 'desc' => 'Энэ платформоор дамжуулан хэрэглэгч нэвтрүүлэх системүүдийг бүртгэх: OAuth2 / OpenID Connect клиент ба тэдгээрийн эрхийн мэдээлэл.', 'pkg' => 'io.gerege.nexus.sso_clients', 'icon' => '/images/icons3d/keys.webp'],
		['name' => 'Цахим засгийн холболт', 'version' => 'v1.0.0', 'desc' => 'Байгууллагын төрийн системтэй холбогдох цэг: ХУР-ын лавлагаа, eID ба ДАН суваг, лавлагааны түүх.', 'pkg' => 'io.gerege.nexus.egov', 'icon' => '/images/icons3d-white/globe.webp'],
	],
	'Санхүү' => [
		['name' => 'Gerege Pay', 'version' => 'v1.0.0', 'desc' => 'Байгууллагын тооцоо хийдэг худалдаачид, тэдний харилцагчийн өмнө зогсох терминалууд, тэр терминалуудын хүлээн авсан гүйлгээ.', 'pkg' => 'mn.gerege.pay', 'icon' => '/images/icons3d-white/phone-card.webp'],
		['name' => 'Gerege Wallet', 'version' => 'v1.1.0', 'desc' => 'Хувь хүний өөрийн данс, үлдэгдэл, гүйлгээний түүх, данс цэнэглэх заавар, бусад руу хийх шилжүүлэг — core banking-ийн дэвтэр дээр.', 'pkg' => 'mn.gerege.bank', 'icon' => '/images/icons3d/briefcase-glass.webp'],
	],
	'Төрийн үйлчилгээ' => [
		['name' => 'Төрийн үйлчилгээ', 'version' => 'v1.0.0', 'desc' => 'Байгууллагын иргэнд санал болгож буй үйлчилгээ, тэдгээрт ирсэн хүсэлтүүд.', 'pkg' => 'mn.gerege.gov', 'icon' => '/images/icons3d/badge-glass.webp'],
	],
	'Хөгжүүлэгчийн хэрэгсэл' => [
		['name' => 'Mini апп-ууд', 'version' => 'v1.3.0', 'desc' => 'Gerege App дотор нээгддэг гуравдагч талын вэб апп-ууд: тэдгээрийг хөгжүүлэгч байгууллагын консол, операторын хяналтын дараалал, хүний зөвшөөрснөөс өөр юу ч дамжуулдаггүй нээлт.', 'pkg' => 'mn.gerege.miniapp', 'icon' => '/images/icons3d-white/puzzle-check.webp'],
	],
	'Эрчим хүч' => [
		['name' => 'PowerGrid App', 'version' => 'v0.1.0', 'desc' => 'Өөрийн цахилгаан: eID-ээр дансаа холбож, хэрэглээ, нэхэмжлэлээ харах, гар утсаар төлөх, өгөгдлөө татах, хуваалцах.', 'pkg' => 'io.gerege.powergrid.app', 'icon' => '/images/icons3d-white/lightning.webp'],
		['name' => 'PowerGrid Hub', 'version' => 'v0.4.0', 'desc' => 'PowerGrid Hub: түгээх компаниудын хэмжилтийн өгөгдлийн үндэсний hub — сүлжээний бүртгэл, заалт, энергийн баланс, төлбөрийн хаб, PowerGrid-ийн өөрийн billing.', 'pkg' => 'io.gerege.powergrid', 'icon' => '/images/icons3d/spheres-glass.webp'],
	],
	'e-Property' => [
		['name' => 'Миний өмч', 'version' => 'v0.2.0', 'desc' => 'Худалдан авагчийн апп: нэгж хадгалах, гэрээнд гарын үсэг зурах, бүх хөгжүүлэгчийн хадгалалт, гэрээ, өөрчлөлтийн мэдэгдлийг нэг дор харах.', 'pkg' => 'mn.eproperty.my', 'icon' => '/images/icons3d-white/home.webp'],
		['name' => 'Төсөл ба борлуулалт', 'version' => 'v0.2.0', 'desc' => 'Хөгжүүлэгчийн бүртгэл нэг аппад: төсөл ба нотлох баримт, нэгж, хадгалалт, eidmongolia.mn-ээр зурсан гэрээ, барилгын явцтай уялдсан төлбөр, УБЕГ-ийн хүсэлт.', 'pkg' => 'mn.eproperty.projects', 'icon' => '/images/icons3d-white/folder-chart.webp'],
		['name' => 'Операторын хяналт', 'version' => 'v0.1.0', 'desc' => 'Операторын дараалал: төслийг борлуулалтад нээхээс өмнөх хоёр шатны батлалт, түр зогсоох, hash chain-ийн шалгалт.', 'pkg' => 'mn.eproperty.oversight', 'icon' => '/images/icons3d-white/monitor.webp'],
	],
];
