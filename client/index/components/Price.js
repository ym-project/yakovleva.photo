import React from 'react'
import '../styles/Price.styl'

import Markdown from './Markdown'

export default function Price() {
    const column1 = `
::: block Классическая
Детская фотосессия (детки от 6 месяцев до 13 лет) без участия родителей в кадре. Отдаю от 50 обработанных фото на диске и печатаю 5 фото формата А4. Исходники не отдаю. За время съёмки вы можете поменять ребёнку 2-4 образа. Одежда не предоставляется. Готовность фотографий 4 недели. Стоимость 4000 р. Дата бронируется по предоплате в сумме 1000 р. на карту Сбербанка. Остальная сумма в день фотосессии.
:::

::: block Сказки (тематические проекты)
Фотографируются только детки. На такие фотосессии предоставляется одежда. Часто эти фотосессии проходят в стиле какой-либо сказки или они посвящены праздникам: Новый год, 1 сентября, весенняя или осенняя тематика и т.д. Стоимость тематических проектов рассчитывается по конкретному проекту.
:::

::: block Годовасие
Проводится на первый День рождения малыша.

В такой фотосессии, кроме именинника или именинницы, могут принимать участие родители и братики и сестрёнки. Необходимо учитывать, что "Годовасие" - это не классическая семейная фотосессия. А потому основное кол-во фото будет с именинником, и лишь небольшая их часть с другими членами семьи. Т.е. индивидуальных портретов папы и мамы в ней не будет, фотографии совместно с малышом, а так же папа и мама вдвоём.

Отмечая детский день рождения, для фотосессии нужно приготовить одежду.
Обычно это 3-4 комплекта для виновника торжества и 1 комплект для родителей, братиков и сестричек. В одной фотозоне фотографируются все члены семьи с именинником, во всех остальных только именинник.

Одежда всех участников фотосессии должна быть выдержана в едином стиле и цветовой гамме. Это может быть один цвет, либо два цвета, которые хорошо между собой сочетаются.
Для примера.
Именинница или именинник одет в бело-синий наряд. Значит у родителей одежда в этом же цвете. Например, папа в белой рубашке и синем галстуке, а мама в синем платье, либо в белом платье и какие-то синие аксессуары к нему. Надеюсь, смысл понятен.

Для совместной фотозоны вы можете взять с собой гелиевые воздушные шары и цифру единичку. Всё должно по цвету гармонировать с нарядами участников фотосессии.

Для именинной фотосессии необходимо взять с собой так же и тортик. Который в конце фотосессии можно дать ребёнку для разгрома, если пожелаете. Предварительно мы обязательно сделаем несколько приличных фото именинника с тортиком.

После того, как мы определимся с датой, я отправлю вам рекомендации по подготовке к фотосессии.

Стоимость фотосессии - 5000 р. Запись по предоплате на карту Сбербанка в сумме - 1000 р., остальная сумма в день фотосессии.
:::
    `.trim()
    const column2 = `
::: block Индивидуальные взрослые фотосессии
Отдаю от 50 обработанных фото на диске и печатаю 5 фото формата А4. Исходники не отдаю. За время съёмки вы можете поменять 2-3 образа. Одежда не предоставляется.Готовность фотографий 4-6 недель. Стоимость 5000 р.
Дата бронируется по предоплате в сумме 1000 р. на карту Сбербанка. Остальная сумма в день фотосессии.
:::

::: block Семейные фотосесии
Отдаю от 70 обработанных фото на диске и печатаю 5 фото формата А4. Исходники не отдаю. За время съёмки вы можете поменять 2-3 образа. Одежда не предоставляется. Готовность фотографий 6-8 недель. Стоимость 6000 р.
Дата бронируется по предоплате в сумме 1000 р. на карту Сбербанка. Остальная сумма в день фотосессии.
:::

::: block Крещение
1 Пакет:

В результате съёмки отдаю все удачные кадры в цвето- и светокоррекции. Это репортажные кадры со всех этапов Таинства Крещения. В детальной ретуши (это обработка, которую вы видите на фото в моём портфолио) я отдаю 20 фотографий.

Стоимость этого пакета услуг - 5000 р.

2 Пакет:

В результате съёмки отдаю все удачные кадры в цвето- и светокоррекции. Это репортажные кадры со всех этапов Таинства Крещения. В детальной ретуши (это обработка, которую вы видите на фото в моём портфолио) я отдаю 30 фотографий. Эти же 30 фото я размещаю на страницах фотокниги, которая тоже входит в этот пакет услуг. Это типографская печать на фотостраницах. Фотокнига формата 20 на 20 см. В ней 10 разворотов, т.е. 20 страниц. Она станет красивым напоминанием о Таинстве Крещения для вашей семьи.

Стоимость этого пакета услуг - 8500 р.

Прошу обратить внимание, что фото из Храма я делаю  в тёмном ключе. На мой взгляд, именно такая обработка позволяет лучше передать атмосферу самого Таинства. Фотографии я вам отсылаю через файлообменник. Загружаю фото на Яндекс-диск и отправляю вам ссылки на скачивание. Срок готовности фото - 6 недель.
:::
    `.trim()
    const column3 = `
По желанию клиента она может проходить либо в студии, либо на природе. Длительность 1,5 - 2 часа. За время фотосессии вы сможете поменять 3-4 образа. Одежда частично предоставляется. Фотографироваться можно как одной, так и с будущим папой и старшими детьми (если есть). Фотосессия в ожидании - это не классическая семейная фотосессия, где у каждого члена семьи одинаковое кол-во фотографий. Большинство фото с такой фотосессии - это снимки будущей мамочки, а примерно 1/3 фото с другими участниками фотосессии. В результате вы получаете от 50 цифровых обработанных фото и 5 напечатанных формата А4. Стоимость - 5000 р. Запись по предоплате на карту Сбербанка в сумме 1000 р. Остальная сумма в день фотосессии.
    `.trim()

    return (
        <div className="price flex">
            <div className="price--column">
                <h2>Детские<br />фотосессии</h2>
                <img src="/pic/price1.jpg" />
                <div>
                    <Markdown text={ column1 } />
                </div>
            </div>
            <div className="price--column">
                <h2>Семейные<br />фотосессии</h2>
                <img src="/pic/price2.jpg" />
                <div>
                    <Markdown text={ column2 } />
                </div>
            </div>
            <div className="price--column">
                <h2>Фотосессии<br />беременности</h2>
                <img src="/pic/price3.jpg" />
                <div>
                    <Markdown text={ column3 } />
                </div>
            </div>
        </div>
    )
}