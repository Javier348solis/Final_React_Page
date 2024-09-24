
const handleSubmit = () => {
    // Reemplaza 'mensaje' con los datos que desees enviar en el mensaje de WhatsApp
    const mensaje = `Consulta desde la pagina web: Nombre: ${name}%0AEmail: ${email}%0ATeléfono: ${phone}%0AEmpresa: ${company}%0AAsunto: ${subject}%0AMensaje: ${message}`;

    // Reemplaza '50662558356' con el número de WhatsApp al que deseas enviar el mensaje
    const url = `https://wa.me/50685526923?text=${mensaje}`;

    // Abre una nueva ventana con el enlace de WhatsApp
    window.open(url, '_blank');
  };
