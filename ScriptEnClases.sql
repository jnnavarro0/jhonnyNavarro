/*SELECT * FROM persona p,estudiante e
WHERE p.ci_per = e.cod_est;*/

/*Mostrar datos de un estudiante en un colegio
SELECT c.nombre_col,p.apellido_per,p.nombre_per
FROM colegio c,estudiante e, persona p
WHERE p.ci_per = e.cod_est AND e.cod_col = c.cod_col
ORDER BY c.nombre_col, p.apellido_per ASC;*/

/*Contar alumnos por colegio
SELECT c.nombre_col, COUNT(*)
FROM colegio c,estudiante e, persona p
WHERE p.ci_per = e.cod_est AND e.cod_col = c.cod_col
GROUP BY c.nombre_col
ORDER BY c.nombre_col ASC;*/

/*Busqueda de una persona por su cédula
SELECT p.nombre_per
FROM persona p
WHERE p.ci_per LIKE '1803893427'*/

/*Promedio en notas por cada estudiante
SELECT p.nombre_per, p.apellido_per,avg(nota)
FROM persona p, nota n
WHERE p.ci_per = n.cod_est
GROUP BY p.nombre_per,p.apellido_per; */

/*Promedio m{aximo} notas por cada estudiante
SELECT p.nombre_per, p.apellido_per,avg(n.nota) AS prom
FROM persona p, nota n
WHERE p.ci_per = n.cod_est
GROUP BY p.nombre_per,p.apellido_per
ORDER BY prom DESC
LIMIT 1;*/


SELECT p.nombre_per, p.apellido_per,avg(n.nota) AS prom
FROM persona p, nota n
WHERE p.ci_per = n.cod_est
GROUP BY p.nombre_per,p.apellido_per
HAVING avg(n.nota) BETWEEN 14 AND 17;