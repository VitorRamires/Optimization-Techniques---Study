import { memo } from "react";
import { log } from "../../log.js";


// impede que icon seja modificado quando o componente pai é executado. 
// é uma função do memo comparar props e observar se a prop foi alterada ou não
const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log("<IconButton /> rendered", 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;
