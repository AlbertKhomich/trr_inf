const PUBLICATION_TYPE_PREDICATE = "http://upbkg.data.dice-research.org/vocab/publicationType";

export function excludeSammelbandPattern(paperVar = "?paper"): string {
  const targetVar = paperVar.trim() || "?paper";

  return `
    FILTER NOT EXISTS {
      ${targetVar} <${PUBLICATION_TYPE_PREDICATE}> ?publicationTypeFilterValue .
      FILTER(LCASE(STR(?publicationTypeFilterValue)) = "sammelband")
    }
  `;
}

/** Fixed publication scope for the TRR application. */
export function trr318Pattern(paperVar = "?paper"): string {
  return `
    FILTER EXISTS {
      ${paperVar} <https://schema.org/keywords> ?trr318Keyword .
      FILTER(CONTAINS(LCASE(STR(?trr318Keyword)), "trr_318"))
    }
  `;
}
