export default (props: { children: any; title: string; dialogId: String }) => {
  return (
    <>
      <dialog id={"#" + props.dialogId}>
        <article>
          <header>
            <a href="#close" aria-label="Close" className="close" />
            {props.title}
          </header>
          {props.children}
        </article>
      </dialog>
    </>
  );
};
