-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2020 a las 02:25:03
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_historial`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) COLLATE utf32_spanish2_ci NOT NULL,
  `habilitado` tinyint(11) NOT NULL DEFAULT 1,
  `eliminado` tinyint(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`id`, `nombre`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Cardiología', 1, 0, '2020-12-15 00:02:56', '2020-12-15 00:02:56'),
(2, 'Clínica Médica', 1, 0, '2020-12-15 00:16:23', '2020-12-15 00:16:23'),
(3, 'Dermatología', 1, 0, '2020-12-15 00:16:47', '2020-12-15 00:16:47'),
(4, 'Fonoaudiología', 1, 0, '2020-12-15 00:17:04', '2020-12-15 00:17:04'),
(5, 'Ginecología', 1, 0, '2020-12-15 00:17:19', '2020-12-15 00:17:19'),
(6, 'Nutricionista', 1, 0, '2020-12-15 00:17:36', '2020-12-15 00:17:36'),
(7, 'Odontología', 1, 0, '2020-12-15 00:17:58', '2020-12-15 00:17:58'),
(8, 'Otorrinolaringología', 1, 0, '2020-12-15 00:18:15', '2020-12-15 00:18:15'),
(9, 'Pediatría', 1, 0, '2020-12-15 00:18:33', '2020-12-15 00:18:33'),
(10, 'Psicología', 1, 0, '2020-12-15 00:18:50', '2020-12-15 00:18:50'),
(11, 'Psiquiatría', 1, 0, '2020-12-15 00:19:12', '2020-12-15 00:19:12'),
(12, 'Terapia Ocupacional', 1, 0, '2020-12-15 00:19:31', '2020-12-15 00:19:31'),
(13, 'Traumatología', 1, 0, '2020-12-15 00:19:47', '2020-12-15 00:19:47'),
(14, 'Psicopedagogía', 1, 0, '2020-12-15 00:20:01', '2020-12-15 00:20:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialistas`
--

CREATE TABLE `especialistas` (
  `id` int(11) NOT NULL,
  `idEspecialidad` int(11) NOT NULL,
  `nombre` varchar(30) COLLATE utf32_spanish2_ci NOT NULL,
  `apellido` varchar(30) COLLATE utf32_spanish2_ci NOT NULL,
  `habilitado` tinyint(11) NOT NULL DEFAULT 1,
  `eliminado` tinyint(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

--
-- Volcado de datos para la tabla `especialistas`
--

INSERT INTO `especialistas` (`id`, `idEspecialidad`, `nombre`, `apellido`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(18, 1, 'Oscar', 'Secilio', 1, 0, '2020-12-15 01:24:10', '2020-12-15 01:24:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) COLLATE utf32_spanish2_ci NOT NULL,
  `apellido` varchar(30) COLLATE utf32_spanish2_ci NOT NULL,
  `mail` varchar(30) COLLATE utf32_spanish2_ci NOT NULL,
  `telefono` int(11) NOT NULL,
  `usuario` varchar(30) COLLATE utf32_spanish2_ci NOT NULL,
  `password` varchar(30) COLLATE utf32_spanish2_ci NOT NULL,
  `habilitado` tinyint(11) NOT NULL DEFAULT 1,
  `eliminado` tinyint(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `social`
--

CREATE TABLE `social` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `sub` varchar(255) COLLATE utf32_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `idPerson` int(11) NOT NULL,
  `usuario` varchar(30) COLLATE utf32_spanish2_ci NOT NULL,
  `password` varchar(30) COLLATE utf32_spanish2_ci NOT NULL,
  `habilitado` tinyint(11) NOT NULL DEFAULT 1,
  `eliminado` tinyint(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_historial`
--

CREATE TABLE `user_historial` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idEspecialistas` int(11) NOT NULL,
  `idEspecialidades` int(11) NOT NULL,
  `habilitado` tinyint(11) NOT NULL DEFAULT 1,
  `eliminado` tinyint(11) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `especialistas`
--
ALTER TABLE `especialistas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEspecialidad` (`idEspecialidad`);

--
-- Indices de la tabla `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `social`
--
ALTER TABLE `social`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `idPerson` (`idPerson`);

--
-- Indices de la tabla `user_historial`
--
ALTER TABLE `user_historial`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idEspecialistas` (`idEspecialistas`),
  ADD KEY `idEspecialidades` (`idEspecialidades`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `especialistas`
--
ALTER TABLE `especialistas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `social`
--
ALTER TABLE `social`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user_historial`
--
ALTER TABLE `user_historial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `especialistas`
--
ALTER TABLE `especialistas`
  ADD CONSTRAINT `especialistas_ibfk_1` FOREIGN KEY (`idEspecialidad`) REFERENCES `especialidades` (`id`);

--
-- Filtros para la tabla `social`
--
ALTER TABLE `social`
  ADD CONSTRAINT `social_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`idPerson`) REFERENCES `person` (`id`);

--
-- Filtros para la tabla `user_historial`
--
ALTER TABLE `user_historial`
  ADD CONSTRAINT `user_historial_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_historial_ibfk_2` FOREIGN KEY (`idEspecialidades`) REFERENCES `especialidades` (`id`),
  ADD CONSTRAINT `user_historial_ibfk_3` FOREIGN KEY (`idEspecialistas`) REFERENCES `especialistas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
