/**
 * 指定したカテゴリに含まれる記事一覧の絶対パスを出力します。
 * @param category カテゴリ名
 * @returns category に該当する記事一覧の絶対パス (URLが必要な場合は別途サイトの URL と併用してください)
 */
const getCategoryUrl = (category: string) => {
    return `/category/${category}`
}

export default getCategoryUrl
