import style from './item_skeleton.module.css'

/**
 * Renders a loading skeleton for a task item
 * Used as a placeholder while task data is being loaded
 */
const ItemSkeleton = () => {
    return (
        <li className={style.item}>
            <div className={style.skeletonIcon} />
            <div className={style.skeletonText} />
            <div className={style.skeletonRemove} />
        </li>
    )
}

export default ItemSkeleton
