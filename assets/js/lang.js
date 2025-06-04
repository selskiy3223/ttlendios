// Функция для определения языка браузера пользователя
        function getUserLanguage() {
            var userLanguage = navigator.language || navigator.userLanguage;
            return userLanguage;
        }

        // Функция для установки текста на другой язык
        function setLanguageText(language) {
            var titleElement = document.getElementById('title');
            var contentElement = document.getElementById('content');

            if (language === 'ru') {
                // Установка текста на русском языке
                titleElement.innerText = 'НАЖМИТЕ И ЗАЖМИТЕ!';
                contentElement.innerText = 'Кликните "Открыть ссылку"';
            } else if (language === 'ja') {
                // Установка текста 
                titleElement.innerText = 'プレスアンドホールド!';
                contentElement.innerText = 'リンクを開く」をクリック';
			} else if (language === 'sv') {
                // Установка текста 
                titleElement.innerText = 'TRYCK OCH HÅLL NED!';
                contentElement.innerText = 'Klicka på ”öppna länk”';
			} else if (language === 'da') {
                // Установка текста 
                titleElement.innerText = 'TRYK PÅ OG HOLD DEN NEDE!';
                contentElement.innerText = 'Klik på "Åbn link"';
			} else if (language === 'ar') {
                // Установка текста 
                titleElement.innerText = 'اضغط وانتظر!';
                contentElement.innerText = 'انقر فوق «رابط مفتوح»';
			} else if (language === 'pt') {
                // Установка текста 
                titleElement.innerText = 'PRESSIONE E SEGURE!';
                contentElement.innerText = 'Clique em "Abrir link"';
			} else if (language === 'it') {
                // Установка текста 
                titleElement.innerText = 'Premere e tenere premuto!';
                contentElement.innerText = 'Fare clic su "Apri collegamento"';
			} else if (language === 'zh') {
                // Установка текста 
                titleElement.innerText = 'PRESS AND HOLD!';
                contentElement.innerText = '单击"打开链接"';
			} else if (language === 'es') {
                // Установка текста 
                titleElement.innerText = 'PRENSA Y ESPERA!';
                contentElement.innerText = 'Haga clic en "Abrir enlace"';
			} else if (language === 'fr') {
                // Установка текста 
                titleElement.innerText = 'APPUYEZ ET ATTENDEZ!';
                contentElement.innerText = 'Cliquez sur « Ouvrir le lien »';
			} else if (language === 'nl') {
                // Установка текста 
                titleElement.innerText = 'INGEDRUKT HOUDEN!';
                contentElement.innerText = 'Klik op "Link openen"';
			} else if (language === 'ua') {
                // Установка текста 
                titleElement.innerText = 'ДРУКУЙ І ТРИМАЙ!';
                contentElement.innerText = 'Натисніть "Відкрити посилання"';
			} else if (language === 'bn') {
                // Установка текста 
                titleElement.innerText = 'টিপুন এবং ধরে রাখুন!';
                contentElement.innerText = '"লিঙ্ক খুলুন" ক্লিক করুন';
			} else if (language === 'hi') {
                // Установка текста 
                titleElement.innerText = 'होल्ड दबाएं!';
                contentElement.innerText = '""लिंक खोलें" पर क्लिक करें';
			} else if (language === 'jv') {
                // Установка текста 
                titleElement.innerText = 'TEKAN & TAHAN!';
                contentElement.innerText = 'Klik "Open link"';
			} else if (language === 'ko') {
                // Установка текста 
                titleElement.innerText = '길게 누릅니다!';
                contentElement.innerText = '"Open link[링크 열기]"를 클릭합니다.';
			} else if (language === 'vi') {
                // Установка текста 
                titleElement.innerText = 'NHẤN GIỮ!';
                contentElement.innerText = 'Nhấp vào "Mở liên kết"';
			} else if (language === 'tr') {
                // Установка текста 
                titleElement.innerText = 'BASIN VE TUTUN!';
                contentElement.innerText = '"Bağlantıyı aç" ı tıklayın"';
			} else if (language === 'pl') {
                // Установка текста 
                titleElement.innerText = 'PRASA I TRZYMAJ!';
                contentElement.innerText = 'Kliknij „Otwórz link”"';
			} else if (language === 'ro') {
                // Установка текста 
                titleElement.innerText = 'PRESĂ ȘI ȚINUT!';
                contentElement.innerText = 'Faceți clic pe „Deschideți linkul”"';
			} else if (language === 'th') {
                // Установка текста 
                titleElement.innerText = 'กดค้างไว้ !';
                contentElement.innerText = 'คลิก " เปิดลิงค์ "';
			} else if (language === 'sk') {
                // Установка текста 
                titleElement.innerText = 'STLAČTE A PODRŽTE TLAČIDLO!';
                contentElement.innerText = 'Kliknite na "Otvoriť odkaz"';
			} else if (language === 'sl') {
                // Установка текста 
                titleElement.innerText = 'PRITISNITE IN DRŽITE!';
                contentElement.innerText = 'Kliknite "Odpri povezavo"';
			} else if (language === 'ms') {
                // Установка текста 
                titleElement.innerText = 'TEKAN DAN TAHAN!';
                contentElement.innerText = 'Klik "Buka pautan"';
			} else if (language === 'ms') {
                // Установка текста 
                titleElement.innerText = 'TEKAN DAN TAHAN!';
                contentElement.innerText = 'Klik "Buka pautan"';
			} else if (language === 'el') {
                // Установка текста 
                titleElement.innerText = 'ΠΑΤΗΣΤΕ ΚΑΙ ΚΡΑΤΗΣΤΕ ΠΑΤΗΜΕΝΟ!';
                contentElement.innerText = 'Κάντε κλικ στο "Άνοιγμα συνδέσμου"';
			} else if (language === 'de') {
                // Установка текста на немецком языке
                titleElement.innerText = 'DRÜCKEN UND HALTEN!';
                contentElement.innerText = 'Klicken Sie auf "Link öffnen".';
            } else {
                // Установка текста по умолчанию (если язык не определен или не поддерживается)
                titleElement.innerText = 'PRESS & HOLD!';
                contentElement.innerText = 'Click "Open link"';
            }
        }

        // При загрузке страницы определяем язык пользователя и устанавливаем соответствующий текст
        window.onload = function () {
            var userLanguage = getUserLanguage();
            setLanguageText(userLanguage);
        };