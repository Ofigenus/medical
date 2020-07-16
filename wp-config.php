<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the

 * installation. You don't have to use the web site, you can

 * copy this file to "wp-config.php" and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * MySQL settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://codex.wordpress.org/Editing_wp-config.php

 *

 * @package WordPress

 */


// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', "med" );


/** MySQL database username */

define( 'DB_USER', "root" );


/** MySQL database password */

define( 'DB_PASSWORD', "root" );


/** MySQL hostname */

define( 'DB_HOST', "localhost" );


/** Database Charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8mb4' );


/** The Database Collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication Unique Keys and Salts.

 *

 * Change these to different unique phrases!

 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}

 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'tZXK[+^6+REw,l?6.KUl8-C};fs3]Mu}ktR1,lYhQWe<V5!lKEz(%8kSxA<.7NG>' );

define( 'SECURE_AUTH_KEY',  '%:gGXLX^`%}~bVz|MK^J4_MbgT0Z3rGnU)b;8,?:e-Qc(8Chu]FN*X )>WUeu3NF' );

define( 'LOGGED_IN_KEY',    'ij=B9)Qm|MXk-L@p-u<ZXGZR3zJB%]oofGcN9AyDV)Mu7YsYYpP!AFc qOD(:e;t' );

define( 'NONCE_KEY',        '1Bh7qK(.ndULwx-_Q%rIwIM9GD_q @XD0xheEmMMR%VHdmy#YpTr/ bDJeh8yraY' );

define( 'AUTH_SALT',        ' r&sJqiELj&;HbIE5f>gW/Io{>s,]Xy  q*dQe!l{uKS[2cCg]*Xazh8<@kI,WdA' );

define( 'SECURE_AUTH_SALT', 'cu<,+fVH&F{+9=42fDfby7*|9R!Y{iJ% u0[DY4Cj5_)::hj4%AvfV0IkD}S=vhD' );

define( 'LOGGED_IN_SALT',   'ekg1p)^xXf+$M?`f{c>(a,y!q6er:~Q8MA30Ml:xMaTU14nJ5Mxbb^jhdBejaraA' );

define( 'NONCE_SALT',       'N8ROIhf]@uXo{_n|i-;$;/OW9-~gN?~Bj$kjd[l`&xwcW,{w~|nfSkw>c$0HyH#z' );


/**#@-*/


/**

 * WordPress Database Table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the Codex.

 *

 * @link https://codex.wordpress.org/Debugging_in_WordPress

 */

define( 'WP_DEBUG', false );


/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

}


/** Sets up WordPress vars and included files. */

require_once( ABSPATH . 'wp-settings.php' );

