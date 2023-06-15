export default (props: { children: any; dialogId: string }) => {
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
          </header>
          {props.children}
        </article>
      </dialog>
    </>
  );
};
