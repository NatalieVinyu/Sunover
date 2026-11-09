export default function Button({ href, ghost, children, className = "", ...rest }) {
  const cls = `btn${ghost ? " ghost" : ""} ${className}`;
  return href ? <a className={cls} href={href} {...rest}>{children}</a> : <button className={cls} {...rest}>{children}</button>;
}
