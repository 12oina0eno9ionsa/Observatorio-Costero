const BACKEND = 'http://localhost:8000'

const Strings = {
  'goToHomePage': {
    es: 'Ir a la pagina principal',
    en: 'Go to home page'
  },
  'error404PageNotFound': {
    es: 'Error 404. Pagina no encontrada',
    en: 'Error 404. Page not found'
  },
  'home': {
    es: 'Home',
    en: 'Home'
  },
  'notFound': {
    es: 'No encontrado',
    en: 'Not Found'
  },
  'youAreBanned': {
    es: 'Estas bloqueado',
    en: 'You are banned'
  },
  'users': {
    es: 'Usuarios',
    en: 'Users'
  },
  'newest': {
    es: 'Mas nuevo',
    en: 'Newest'
  },
  'oldest': {
    es: 'Mas antiguo',
    en: 'Oldest'
  },
  'online': {
    es: 'En linea',
    en: 'Online'
  },
  'noUsersYet': {
    es: 'No hay usuarios todavia',
    en: 'No users yet',
  },
  'noAdminsYet': {
    es: 'No hay admins todavia',
    en: 'No admins yet',
  },
  'unableToDisplayUsers': {
    es: 'Unable to display users',
    en: 'Unable to display users'
  },
  'profile': {
    es: 'Perfil',
    en: 'Profile'
  },
  'lastSeen': {
    es: 'Ultima vez',
    en: 'Last seen'
  },
  'settings': {
    es: 'Configuracion',
    en: 'Settings'
  },
  'unableToDisplayUserProfile': {
    es: 'Unable to display user profile',
    en: 'Unable to display user profile'
  },
  'profileSettings': {
    es: 'Configurar perfil',
    en: 'Profile settings'
  },
  'uploadProfilePicture': {
    es: 'Subir foto de perfil',
    en: 'Upload profile picture'
  },
  'accepted': {
    es: 'Aceptado',
    en: 'Accepted'
  },
  'maxFilesCount': {
    es: 'Maxima filas contadas',
    en: 'Max files count',
  },
  'maxSize': {
    es: 'Tamano maximo',
    en: 'Max size'
  },
  'upload': {
    es: 'Subir',
    en: 'Upload'
  },
  'popularBoards': {
    es: 'Boards Populares',
    en: 'Popular boards'
  },
  'all': {
    es: 'Todo',
    en: 'All'
  },
  'recentlyThreads': {
    es: 'Publicaciones recientes',
    en: 'Recently threads'
  },
  'noThreadsYet': {
    es: 'No hay publicaciones',
    en: 'No threads yet'
  },
  'filesUploads': {
    es: 'Archivos/Subidos',
    en: 'Files/Uploads'
  },
  'noUploadsYet': {
    es: 'No hay archivos',
    en: 'No uploads yet'
  },
  'thread': {
    es: 'Hilo',
    en: 'Thread'
  },
  'allBoards': {
    es: 'Todas las categorias',
    en: 'All boards'
  },
  'error': {
    es: 'Error',
    en: 'Error'
  },
  'threadNotFound': {
    es: 'Hilo no encontrado',
    en: 'Thread not found'
  },
  'noAnswersYet': {
    es: 'No hay respuestas disponibles',
    en: 'No answers yet'
  },
  'boards': {
    es: 'Categorias',
    en: 'Boards'
  },
  'default': {
    es: 'Default',
    en: 'Default'
  },
  'popular': {
    es: 'Popular',
    en: 'Popular'
  },
  'recentlyAnswered': {
    es: 'Actividad reciente',
    en: 'Recently answered'
  },
  'byNewest': {
    es: 'Mas nuevo',
    en: 'By newest'
  },
  'byAnswersCount': {
    es: 'Por respuestas',
    en: 'By answers count'
  },
  'noBoardsYet': {
    es: 'No hay boards disponibles',
    en: 'No boards yet'
  },
  'unableToDisplayBoards': {
    es: 'Unable to display boards',
    en: 'Unable to display boards'
  },
  'board': {
    es: 'Board',
    en: 'Board'
  },
  'unableToDisplayBoard': {
    es: 'Unable to display board',
    en: 'Unable to display board'
  },
  'unableToDisplayThreads': {
    es: 'Unable to display hilos',
    en: 'Unable to display threads'
  },
  'unableToDisplayAnswers': {
    es: 'Unable to display respuestas',
    en: 'Unable to display answers'
  },
  'adminDashboard': {
    es: 'Vista general',
    en: 'Admin dashboard'
  },
  'dashboard': {
    es: 'Dashboard',
    en: 'Dashboard'
  },
  'admins': {
    es: 'Administradores',
    en: 'Admins'
  },
  'reports': {
    es: 'Reportes',
    en: 'Reports'
  },
  'bans': {
    es: 'Bloqueos',
    en: 'Bans'
  },
  'manageBoards': {
    es: 'Manage categorias',
    en: 'Manage boards'
  },
  'createNewBoard': {
    es: 'Crear categoria',
    en: 'Create new board'
  },
  'enterShortName': {
    es: 'Ingresa etiqueta de la categoria',
    en: 'Enter short name'
  },
  'enterTitle': {
    es: 'Ingresa Titulo',
    en: 'Enter title',
  },
  'enterPosition': {
    es: 'Ingresa posicion',
    en: 'Enter position'
  },
  'thread1': {
    es: 'hilo',
    en: 'thread'
  },
  'thread2': {
    es: 'hilos',
    en: 'threads'
  },
  'thread3': {
    es: 'hilos',
    en: 'threads'
  },
  'answer1': {
    es: 'respuesta',
    en: 'answer'
  },
  'answer2': {
    es: 'respuestas',
    en: 'answers'
  },
  'answer3': {
    es: 'respuestas',
    en: 'answers'
  },
  'boardShortName': {
    es: 'Etiqueta',
    en: 'Board short name'
  },
  'boardTitle': {
    es: 'Titulo de la Categoria',
    en: 'Board title'
  },
  'boardDescription': {
    es: 'Descripcion',
    en: 'Board description'
  },
  'enterDescription': {
    es: 'Ingresa Descripcion',
    en: 'Enter description'
  },
  'boardPosition': {
    es: 'Posicion Board',
    en: 'Boards position'
  },
  'save': {
    es: 'Guardar',
    en: 'Save'
  },
  'create': {
    es: 'Crear',
    en: 'Create'
  },
  'cancel': {
    es: 'Cancelar',
    en: 'Cancel'
  },
  'noBansYet': {
    es: 'No hay bloqueos todavia',
    en: 'No bans yet'
  },
  'unableToDisplayBans': {
    es: 'Unable to display bans',
    en: 'Unable to display bans'
  },
  'signIn': {
    es: 'Sign in',
    en: 'Sign In'
  },
  'enterYourName': {
    es: 'Ingresa nombre de usuario',
    en: 'Enter your username'
  },
  'enterPassword': {
    es: 'Ingresa contrasena',
    en: 'Enter password'
  },
  'logInAccount': {
    es: 'Ingresar',
    en: 'Login account'
  },
  'username': {
    es: 'Nombre de usuario',
    en: 'Username'
  },
  'password': {
    es: 'Contrasena',
    en: 'Password'
  },
  'or': {
    es: 'O',
    en: 'Or'
  },
  'ifYouDontHaveAnAccount': {
    es: 'Si no tienes una cuenta',
    en: 'if you don\'t have an account'
  },
  'signUp': {
    es: 'Registrarse',
    en: 'Sign Up'
  },
  'enterEmail': {
    es: 'Ingresa Email',
    en: 'Enter email'
  },
  'passwordsNotMatch': {
    es: 'Contrasenas no coinciden',
    en: 'Passwords not match'
  },
  'createYourAccount': {
    es: 'Registrate',
    en: 'Create your account'
  },
  'emailAddress': {
    es: 'Email',
    en: 'Email address'
  },
  'confirmPassword': {
    es: 'Confirme contrasena',
    en: 'Confirm password'
  },
  'createAccount': {
    es: 'Crear cuenta',
    en: 'Create account'
  },
  'ifYouAlreadyHaveAnAccount': {
    es: 'Si ya tienes una cuenta',
    en: 'if you already have an account'
  },
  'enterThreadTitle': {
    es: 'Ingresa titulo de hilo',
    en: 'Enter thread title'
  },
  'enterContent': {
    es: 'Ingresa contenido',
    en: 'Enter content'
  },
  'chooseFromList': {
    es: 'Selecciona de la lista',
    en: 'Choose from list'
  },
  'boardsNotLoaded': {
    es: 'Boards not loaded',
    en: 'Boards not loaded'
  },
  'enterReason': {
    es: 'Ingresa razon',
    en: 'Enter reason'
  },
  'enterDate': {
    es: 'Ingresa fecha',
    en: 'Enter date'
  },
  'newThread': {
    es: 'Nueva publicacion',
    en: 'New thread'
  },
  'threadTitle': {
    es: 'Titulo de la Publicacion',
    en: 'Thread title'
  },
  'content': {
    es: 'Contenido',
    en: 'Content'
  },
  'chooseABoard': {
    es: 'Elige un board',
    en: 'Choose a board'
  },
  'select': {
    es: 'Seleccionar',
    en: 'Select'
  },
  'loading': {
    es: 'Cargando',
    en: 'Loading'
  },
  'createThread': {
    es: 'Crear Publicacion',
    en: 'Create thread'
  },
  'answerInThread': {
    es: 'Respuesta en hilo',
    en: 'Answer in thread'
  },
  'answer': {
    es: 'Respuesta',
    en: 'Answer'
  },
  'editAnswer': {
    es: 'Editar respuesta',
    en: 'Edit answer'
  },
  'edit': {
    es: 'Editar',
    en: 'Edit'
  },
  'editThread': {
    es: 'Editar hilo',
    en: 'Edit thread'
  },
  'banUser': {
    es: 'Bloquear usuario',
    en: 'Ban user'
  },
  'reason': {
    es: 'Razon',
    en: 'Reason'
  },
  'banDuration': {
    es: 'Duracion del bloqueo',
    en: 'Ban duration'
  },
  'ban': {
    es: 'Bloquear',
    en: 'Ban'
  },
  'createNew': {
    es: 'Crear nuevo',
    en: 'Create new'
  },
  'messages': {
    es: 'Mensajes',
    en: 'Messages'
  },
  'rules': {
    es: 'Acerca de nosotros',
    en: 'About us'
  },
  'enterForSearch': {
    es: 'Buscar',
    en: 'Enter for search'
  },
  'noNotificationYet': {
    es: 'No hay notificaciones',
    en: 'No notification yet'
  },
  'deleteAllNotifications': {
    es: 'Borrar notificaciones',
    en: 'Delete all notifications'
  },
  'unableToDisplayNotifications': {
    es: 'Unable to display notificactions',
    en: 'Unable to display notifications'
  },
  'openProfile': {
    es: 'Abrir perfil',
    en: 'Open profile'
  },
  'language': {
    es: 'Lenguaje',
    en: 'Language',
    
  },
  'toggleTheme': {
    es: 'Activar/Desactivar modo oscuro',
    en: 'Toggle theme'
  },
  'logout': {
    es: 'Cerrar sesion',
    en: 'Logout'
  },
  'chooseAFile': {
    es: 'Elegir archivo',
    en: 'Choose a file'
  },
  'choose': {
    es: 'Elegir',
    en: 'Choose'
  },
  'fileNotSelected': {
    es: 'Sin seleccionar archivo',
    en: 'File not selected'
  },
  'attachFile': {
    es: 'Adjuntar archivo',
    en: 'Attach file'
  },
  'perFile': {
    es: 'Perfil',
    en: 'per file'
  },
  'textFieldSupportsMarkdown': {
    es: 'Text field supports Markdown',
    en: 'Text field supports Markdown'
  },
  'pin': {
    es: 'Marcar',
    en: 'Pin'
  },
  'unpin': {
    es: 'Desmarcar',
    en: 'Unpin'
  },
  'open': {
    es: 'Abrir',
    en: 'Open'
  },
  'close': {
    es: 'Cerrar',
    en: 'Close'
  },
  'delete': {
    es: 'Borrar',
    en: 'Delete'
  },
  'deleteAll': {
    es: 'Borrar todo',
    en: 'Delete all'
  },
  'unbanUser': {
    es: 'Desbloquear usuario',
    en: 'Unban user'
  },
  'report': {
    es: 'Reportar',
    en: 'Report'
  },
  'like1': {
    es: 'like',
    en: 'like'
  },
  'like2': {
    es: 'likes',
    en: 'likes'
  },
  'like3': {
    es: 'likes',
    en: 'likes'
  },
  'banExpires': {
    es: 'Termino el bloqueo',
    en: 'Ban expires'
  },
  'userBanned': {
    es: 'Usuario bloqueado',
    en: 'User banned'
  },
  'unread': {
    es: 'No leido',
    en: 'Unread'
  },
  'read': {
    es: 'Leido',
    en: 'Read'
  },
  'noReportsYet': {
    es: 'No hay reportes',
    en: 'No reports yet'
  },
  'unableToDisplayReports': {
    es: 'Unable to display reports',
    en: 'Unable to display reports'
  },
  'reportSent': {
    es: 'Enviar reporte',
    en: 'Report sent'
  },
  'search': {
    es: 'Buscar',
    en: 'Search'
  },
  'searchResults': {
    es: 'Resultados de busqueda',
    en: 'Search results'
  },
  'enterYourSearchTerm': {
    es: 'Ingresa terminos de busqueda',
    en: 'Enter your search term'
  },
  'noResults': {
    es: 'No hay resultados',
    en: 'No results'
  },
  'unableToDisplaySearchResults': {
    es: 'Unable to display search results',
    en: 'Unable to display search results'
  },
  'showMore': {
    es: 'Mostrar mas',
    en: 'Show more'
  },
  'showLess': {
    es: 'Mostrar menos',
    en: 'Show less'
  },
  'threads': {
    es: 'Hilos',
    en: 'Threads'
  },
  'answers': {
    es: 'Respuestas',
    en: 'Answers'
  },
  'folder': {
    es: 'Carpeta',
    en: 'Folder'
  },
  'uploadsFolders': {
    es: 'Carpetas subidas',
    en: 'Uploads folders'
  },
  'manageUploadsFolders': {
    es: 'Manage uploads folders',
    en: 'Manage uploads folders'
  },
  'createNewFolder': {
    es: 'Crear nueva carpeta',
    en: 'Create new folder'
  },
  'file1': {
    es: 'archivo',
    en: 'file'
  },
  'file2': {
    es: 'archivos',
    en: 'files'
  },
  'file3': {
    es: 'archivos',
    en: 'files'
  },
  'folderShortName': {
    es: 'Folder short name',
    en: 'Folder short name'
  },
  'folderTitle': {
    es: 'Titulo carpeta',
    en: 'Folder title'
  },
  'folderDescription': {
    es: 'Descripcion de la carpeta',
    en: 'Folder description'
  },
  'folderPosition': {
    es: 'Posicion de la carpeta',
    en: 'Folder position'
  },
  'noFoldersYet': {
    es: 'No hay carpetas',
    en: 'No folders yet'
  },
  'unableToDisplayFolders': {
    es: 'Unable to display folders',
    en: 'Unable to display folders'
  },
  'unableToDisplayFolder': {
    es: 'Unable to display folder',
    en: 'Unable to display folder'
  },
  'newFile': {
    es: 'Nuevo archivo',
    en: 'New file'
  },
  'noFilesYet': {
    es: 'No hay archivos',
    en: 'No files yet'
  },
  'unableToDisplayFiles': {
    es: 'Unable to display files',
    en: 'Unable to display files'
  },
  'download1': {
    es: 'descargar',
    en: 'download'
  },
  'download2': {
    es: 'descargas',
    en: 'downloads'
  },
  'download3': {
    es: 'descargas',
    en: 'downloads'
  },
  'fileTitle': {
    es: 'Titulo archivo',
    en: 'File title'
  },
  'chooseAFolder': {
    es: 'Elegir carpeta',
    en: 'Choose a folder'
  },
  'yourFile': {
    es: 'Tu archivo',
    en: 'Your file'
  },
  'uploadFile': {
    es: 'Subir archivo',
    en: 'Upload file'
  },
  'foldersNotLoaded': {
    es: 'Carpetas no cargadas',
    en: 'Folders not loaded'
  },
  'moderateFiles': {
    es: 'Moderar archivos',
    en: 'Moderate files'
  },
  'needToModerate': {
    es: 'Revisar',
    en: 'Need to moderate'
  },
  'download': {
    es: 'Descargar',
    en: 'Download'
  },
  'publish': {
    es: 'Publicar',
    en: 'Publish'
  },
  'onModeration': {
    es: 'Revisando',
    en: 'On moderation'
  },
  'theFileWillBePublishedAfterModeration': {
    es: 'El archivo sera subido despues de ser revisado',
    en: 'The file will be published after moderation'
  },
  'fileNotFound': {
    es: 'Archivo no encontrado',
    en: 'File not found'
  },
  'file': {
    es: 'Archivo',
    en: 'File'
  },
  'fileDeleted': {
    es: 'Archivo eliminado',
    en: 'File deleted'
  },
  'editFile': {
    es: 'Editar archivo',
    en: 'Edit file'
  },
  'copyFileLink': {
    es: 'Copiar enlace del archivo',
    en: 'Copy file link'
  },
  'linkCopied': {
    es: 'Enlace copiado',
    en: 'Link copied'
  },
  'failedToCopyLink': {
    es: 'No se ha podido copiar el enlace',
    en: 'Failed to copy link'
  },
  'extension': {
    es: 'Extension',
    en: 'Extension'
  },
  'fileSize': {
    es: 'Tamano de archivo',
    en: 'File size'
  },
  'comments': {
    es: 'Comentarios',
    en: 'Comments'
  },
  'noCommentsYet': {
    es: 'No hay comentarios',
    en: 'No comments yet'
  },
  'enterYourComment': {
    es: 'Comentar',
    en: 'Enter your comment'
  },
  'appointAsAModerator': {
    es: 'Appoint as a moderator',
    en: 'Appoint as a moderator',
  },
  'removeModerator': {
    es: 'Quitar moderador',
    en: 'Remove moderator'
  },
  'unableToDisplayProfileInfo': {
    es: 'Unable to display profile info',
    en: 'Unable to display profile info'
  },
  'noMessagesYet': {
    es: 'No hay mensajes',
    en: 'No messages yet'
  },
  'unableToDisplayMessages': {
    es: 'Unable to display messages',
    en: 'Unable to display messages'
  },
  'message': {
    es: 'Mensaje',
    en: 'Message'
  },
  'you': {
    es: 'Tu',
    en: 'You'
  },
  'dialogueWith': {
    es: 'Conversando con',
    en: 'Dialogue with'
  },
  'enterYourMessage': {
    es: 'Escribe tu mensaje',
    en: 'Enter your message'
  },
  'isTyping': {
    es: 'Esta escribiendo',
    en: 'is typing'
  },
  'noInternetConnection': {
    es: 'Sin conexion a internet',
    en: 'No internet connection'
  },
  'karma': {
    es: 'Karma',
    en: 'Karma'
  },
  'passwordChange': {
    es: 'Cambiar contrasena',
    en: 'Password change'
  },
  'changePassword': {
    es: 'Cambiar contrasena',
    en: 'Change password'
  },
  'newPassword': {
    es: 'Nueva contrasena',
    en: 'New password'
  },
  'enterNewPassword': {
    es: 'Ingresa nueva contrasena',
    en: 'Enter new password'
  },
  'searchIn': {
    es: 'Buscar',
    en: 'Search in'
  },
  'authorizationsHistory': {
    es: 'Registro de ingreso',
    en: 'Authorizations history'
  },
  'userHasNotLoggedInYet': {
    es: 'Usuario no ha ingresado',
    en: 'User has not logged in yet'
  },
  'unableToDisplayAuthorizationsHistory': {
    es: 'Unable to display authorizations history',
    en: 'Unable to display authorizations history'
  },
  'deleteAllAnswers': {
    es: 'Borrar respuestas',
    en: 'Delete all answers'
  },
  'isViewing': {
    es: 'Esta observando',
    en: 'is viewing'
  },
}



const imageTypes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif', 'image/webp', 'image/vnd.microsoft.icon']
const videoTypes = ['video/mp4', 'video/webm', 'video/avi', 'video/msvideo', 'video/x-msvideo', 'video/mpeg', 'video/3gpp', 'video/quicktime']
const fileExt = /(?:\.([^.]+))?$/

export { BACKEND, Strings, imageTypes, videoTypes, fileExt };
