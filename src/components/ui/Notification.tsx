type Props = {
  title: string;
  message: string;
  status?: 'pending' | 'success' | 'error';
};

const Notification = ({ title, message, status }: Props) => {
  let statusClass = '';
  if (status === 'success') {
    statusClass = ' notification--success';
  }
  if (status === 'error') {
    statusClass = ' notification--error';
  }
  const cssClasses = `notification${statusClass}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
export type { Props as NotificationProps };
