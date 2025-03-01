export function svgChart() {
  const svg = d3.select("#svgChart");
  const width = 1400, height = 655;

  // Три набора данных для трех линий
  const datasets = [
    [
      { x: 60, y: 508 },
      { x: 116, y: 525, special: true },
      { x: 185, y: 490 },
      { x: 238, y: 490 },
      { x: 305, y: 435, special: true },
      { x: 347, y: 450 },
      { x: 396, y: 416 },
      { x: 465, y: 440 },
      { x: 516, y: 384 },
      { x: 609, y: 393 },
      { x: 690, y: 343, special: true },
      { x: 858, y: 308 },
      { x: 929, y: 335 },
      { x: 1163, y: 235 },
      { x: 1213, y: 249 },
      { x: 1266, y: 218 },
      { x: 1322, y: 226 },
      { x: 1376, y: 207 },
    ],
    [
      { x: 60, y: 539 },
      { x: 116, y: 525 },
      { x: 177, y: 484 },
      { x: 224, y: 482 },
      { x: 293, y: 427 },
      { x: 408, y: 495 },
      { x: 468, y: 455 },
      { x: 527, y: 464 },
      { x: 599, y: 423 },
      { x: 656, y: 453 },
      { x: 697, y: 429 },
      { x: 749, y: 439 },
      { x: 809, y: 398 },
      { x: 865, y: 395 },
      { x: 921, y: 411 },
      { x: 1019, y: 368 },
      { x: 1092, y: 422, special: true },
      { x: 1201, y: 345 },
      { x: 1321, y: 321 },
      { x: 1373, y: 263 },
    ],
    [
      { x: 60, y: 510 },
      { x: 122, y: 488 },
      { x: 179, y: 509 },
      { x: 228, y: 484 },
      { x: 284, y: 495 },
      { x: 338, y: 452 },
      { x: 391, y: 476 },
      { x: 449, y: 427 },
      { x: 491, y: 444 },
      { x: 553, y: 420 },
      { x: 623, y: 476 },
      { x: 713, y: 367 },
      { x: 877, y: 294 },
      { x: 1082, y: 390 },
      { x: 1368, y: 238 },
    ]
  ];

  const colors = ["url(#paint0_linear_43_38375)", "#1DE1D3", "#723AA9"];
  const strokeWidth = [5, 3, 3];
  const radius = [3, 1, 1];
  // Оси X и Y
  svg.append("line")
    .attr("x1", 60).attr("y1", height - 70)
    .attr("x2", 60).attr("y2", 100)
    .attr("stroke", "url(#paint0_linear_43_38375)")
    .attr("stroke-width", 1)
    .attr("stroke-solid", "4,4")
    .attr("opacity", 0)
    .transition()
    .duration(1500)
    .attr("opacity", 1);

  svg.append("line")
    .attr("x1", 60).attr("y1", height - 70)
    .attr("x2", width - 80).attr("y2", height - 70)
    .attr("stroke", "url(#paint0_linear_43_38375)")
    .attr("stroke-width", 1)
    .attr("stroke-solid", "4,4")
    .attr("opacity", 0)
    .transition()
    .duration(1500)
    .attr("opacity", 1);

  // Добавляем стрелки на осях
  const arrowSize = 5;

  // Стрелка на оси Y (сверху)
  svg.append("line")
    .attr("x1", 60 - arrowSize).attr("y1", 100 + arrowSize)
    .attr("x2", 60).attr("y2", 100)
    .attr("stroke", "url(#paint0_linear_43_38375)")
    .attr("stroke-width", 1)
    .attr("opacity", 0)
    .transition()
    .duration(1500)
    .attr("opacity", 1);

  svg.append("line")
    .attr("x1", 60 + arrowSize).attr("y1", 100 + arrowSize)
    .attr("x2", 60).attr("y2", 100)
    .attr("stroke", "url(#paint0_linear_43_38375)")
    .attr("stroke-width", 1)
    .attr("opacity", 0)
    .transition()
    .duration(1500)
    .attr("opacity", 1);

  // Стрелка на оси X (справа)
  svg.append("line")
    .attr("x1", width - 80 - arrowSize).attr("y1", height - 70 - arrowSize)
    .attr("x2", width - 80).attr("y2", height - 70)
    .attr("stroke", "url(#paint0_linear_43_38375)")
    .attr("stroke-width", 1)
    .attr("opacity", 0)
    .transition()
    .duration(1500)
    .attr("opacity", 1);

  svg.append("line")
    .attr("x1", width - 80 - arrowSize).attr("y1", height - 70 + arrowSize)
    .attr("x2", width - 80).attr("y2", height - 70)
    .attr("stroke", "url(#paint0_linear_43_38375)")
    .attr("stroke-width", 1)
    .attr("opacity", 0)
    .transition()
    .duration(1500)
    .attr("opacity", 1);

  // Подпись оси X
  svg.append("text")
    .attr("x", (width - 80 + 100) / 2) // Центр оси X
    .attr("y", height - 45) // Опускаем ниже оси
    .attr("font-family", "var(--font-family)")
    .attr("font-size", "18px")
    .attr("fill", "black")
    .attr("text-anchor", "middle") // Выравниваем по центру
    .text("Используемые технологии")
    .attr("opacity", 0)
    .transition()
    .duration(1500)
    .attr("opacity", 1);

  // Подпись оси Y
  svg.append("text")
    .attr("x", 20) // Сдвигаем левее, чтобы было снаружи
    .attr("y", (height - 70 + 150) / 2) // Центрируем по оси Y
    .attr("font-family", "var(--font-family)")
    .attr("font-size", "18px")
    .attr("fill", "black")
    .attr("text-anchor", "middle") // Выравниваем текст по центру относительно оси
    .attr("transform", "rotate(-90, 20, " + ((height - 70 + 100) / 2) + ")") // Разворот текста
    .text("Скорость принимаемых решений")
    .attr("opacity", 0)
    .transition()
    .duration(1500)
    .attr("opacity", 1);

  // Функция генерации линии
  const line = d3.line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(d3.curveLinear); // Ломаная линия

  datasets.forEach((data, index) => {
    // Создаем линию
    const path = svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", colors[index])
      .attr("stroke-width", strokeWidth[index])
      .attr("d", line)
      .attr("stroke-dasharray", function () { return this.getTotalLength(); })
      .attr("stroke-dashoffset", function () { return this.getTotalLength(); });

    // Анимация линии
    path.transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0);

    data.forEach((d, i) => {
      setTimeout(() => {
        if (d.special) {
          // Если точка особая, рисуем квадрат вместо круга
          if (index === 0 && i === 1) {
            svg.append("circle")
              .attr("cx", d.x)
              .attr("cy", d.y)
              .attr("r", 0)
              .attr("fill", "#ffffff")
              .transition()
              .duration(300)
              .attr("r", radius[index]);

            svg.append("line")
              .attr("x1", d.x)
              .attr("y1", d.y)
              .attr("x2", d.x)
              .attr("y2", d.y + 33)
              .attr("stroke", "url(#paint0_linear_43_38375)")
              .attr("stroke-width", 1)
              .attr("opacity", 0)
              .transition()
              .duration(1500)
              .attr("opacity", 1);

            svg.append("line")
              .attr("x1", d.x) // Начало линии (центр точки)
              .attr("y1", d.y + 33) // Начало линии (центр точки)
              .attr("x2", d.x + 270) // Конец линии (центр foreignObject по X)
              .attr("y2", d.y + 33) // Конец линии (нижний край foreignObject)
              .attr("stroke", "url(#paint0_linear_43_38375)") // Цвет линии
              .attr("stroke-width", 1) // Толщина линии
              .attr("opacity", 0) // Начальная прозрачность
              .transition()
              .duration(1500)
              .attr("opacity", 1); // Появление линии

            svg.append("text")
              .attr("x", d.x + 270 / 2) // Центр линии по X
              .attr("y", d.y + 33 - 10) // Над линией (смещение на 20 пикселей вверх)
              .attr("font-family", "var(--font-family)")
              .attr("font-size", "16px")
              .attr("fill", "#000000")
              .attr("text-anchor", "middle")
              .text("Другие способы работы с данными")
              .attr("opacity", 0)
              .transition()
              .duration(1500)
              .attr("opacity", 1);
          } else {
            const group = svg.append("g")

            group.append("circle")
              .attr("cx", d.x)
              .attr("cy", d.y)
              .attr("r", 0)
              .attr("fill", "#723AA9")
              .attr("opacity", "0.2")
              .transition()
              .duration(300)
              .attr("r", 33);

            group.append("circle")
              .attr("cx", d.x)
              .attr("cy", d.y)
              .attr("r", 0)
              .attr("fill", "url(#paint0_linear_43_38335)")
              .transition()
              .duration(300)
              .attr("r", 11);

            const textLink = ["Modus BI Cloud", "Modus BI", "Modus ETL"];
            const textDesc = ["Визуализируйте данные и создавайте прогнозы в облаке без установки дорогостоящих сервисов и программирования.", "Создавайте дашборды, находите зависимости и прогнозируйте тренды в режиме low-code.", "Извлекайте любые данные из множества источников, подготавливайте и используйте для аналитики."];
            group.append("foreignObject")
              .attr("x", d.x - 320 / 2)
              .attr("y", d.y - 63 - 170)
              .attr("width", 320)
              .attr("height", 170)
              .attr("class", "foreignObject")
              .append("xhtml:div")
              .style("width", "100%")
              .style("height", "100%")
              .style("background-color", "#ffffff")
              .html('<div class="box-info-anim"><a href="https://example.com" target="_blank" class="box-info-anim__link">' +
                (index === 0 && i === 4 ? textLink[0] :
                  index === 0 && i === 10 ? textLink[1] :
                    index === 1 && i === 16 ? textLink[2] : textLink[index]) +
                '</a><p class="box-info-anim__desc">' +
                (index === 0 && i === 4 ? textDesc[0] :
                  index === 0 && i === 10 ? textDesc[1] :
                    index === 1 && i === 16 ? textDesc[2] : textDesc[index]) +
                '</p></div>')
              //.html('<div class="box-info-anim"><a href="https://example.com" target="_blank" class="box-info-anim__link">' + textLink[index] + '</a><p class="box-info-anim__desc">' + textDesc[index] + '</p></div>')
              .attr("opacity", 0)
              .transition()
              .duration(1500)
              .attr("opacity", 1);

            group.append("line")
              .attr("x1", d.x) // Начало линии (центр точки)
              .attr("y1", d.y) // Начало линии (центр точки)
              .attr("x2", d.x) // Конец линии (центр foreignObject по X)
              .attr("y2", d.y - 63) // Конец линии (нижний край foreignObject)
              .attr("stroke", "url(#paint0_linear_43_38375)") // Цвет линии
              .attr("stroke-width", 1) // Толщина линии
              .attr("opacity", 0) // Начальная прозрачность
              .transition()
              .duration(1500)
              .attr("opacity", 1); // Появление линии
          }
        } else {
          // Обычные точки (круги)
          svg.append("circle")
            .attr("cx", d.x)
            .attr("cy", d.y)
            .attr("r", 0)
            .attr("fill", "#ffffff")
            .transition()
            .duration(300)
            .attr("r", radius[index]);
        }
      }, (i / data.length) * 2000);
    });
  });
}

export function observeSvgChart() {
  const svgChartElement = document.querySelector('#svgChart');

  if (svgChartElement) {
      const options = {
          root: null, // Используем viewport как область отслеживания
          rootMargin: '0px', // Без отступов
          threshold: 0.7 // Срабатывает, когда видно 70% элемента
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // Если видно 70% элемента, запускаем функцию
                  svgChart();
                  // Отключаем observer, чтобы функция не запускалась повторно
                  observer.unobserve(svgChartElement);
              }
          });
      }, options);

      // Начинаем наблюдение за элементом
      observer.observe(svgChartElement);
  }
}