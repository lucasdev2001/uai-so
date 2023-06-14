export default (props: { children: any; title: any; dialogId: string }) => {
  return (
    <>
      <dialog id={props.dialogId}>
        <article>
          <header>
            <a
              href="#close"
              aria-label="Close"
              className="close"
              onClick={() =>
                (
                  document.getElementById(props.dialogId) as HTMLDialogElement
                ).close()
              }
            />
            {props.title}
          </header>
          {props.children}
        </article>
      </dialog>
    </>
  );
};
