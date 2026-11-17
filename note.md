1. Проверить ошибки в консоле в браузере
2. W3C Markup Validation Service (validator.w3.org) - Проверка валидности HTML
3. W3C CSS Validation Service - Проверка валидности CSS
4. Отсутствие синтаксических ошибок в скомпилированном CSS-файле.
5. Google Lighthouse (вкладка в DevTools Chrome F12) Комплексный аудит
6. Can I Use (caniuse.com) Кроссбраузерность

<!-- GIT -->

git status <!-- проверка изменений -->

git add . <!-- Добавление всех измененных файлов в зону подготовки (Staging area): -->
git commit -m "refactor: "
git push

<!-- Работа с ветками -->

git push origin about-section

git fetch - скачать информацию о новых ветках с GitHub
git switch <ветка>

<!-- Пошагово -->

Шаг 1
git switch -c <ветка> <!-- Создать ветку и сразу перейти в неё -->

Шаг 2: Внести изменения в код

Шаг 3: Проверить статус и добавить изменения в Git (Индексация + Коммит)
git status
git add .
git commit -m "feat(reviews): добавлен динамический рендер отзывов и семантическая разметка"

Шаг 4: Слияние с основной веткой (Локально)
git switch main
git merge <ветка>

Шаг 5: ОТПРАВКА НА GITHUB (Критически важный шаг!)
git push origin main

Шаг 6: Удаление отработанной ветки (Локально)
git branch -d <ветка> - пока не удалял ветку projects-card
