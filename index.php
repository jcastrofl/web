<?php
/**
 * Redirección a la carpeta public
 * Este archivo actúa como punto de entrada principal y redirige todas las solicitudes
 * a la carpeta public donde se encuentra la aplicación web principal.
 */

// Definir la ruta base de la aplicación
define('APP_ROOT', __DIR__);

// Redirigir a la carpeta public
header('Location: public/');
exit; 