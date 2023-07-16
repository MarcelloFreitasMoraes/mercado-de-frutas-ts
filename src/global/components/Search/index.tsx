import { Container } from "@/styles/Global";
import * as S from "./styles";
import { FaSearch } from 'react-icons/fa'
import { SearchProps } from "./types";

export default function Search({ setSearch, search }: SearchProps) {
  const resultSearch = () => {
    window.location.href = `/resultado-busca?fruta=${search}`
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <S.Content>
      <Container>
        <S.Wrapper>
          <S.Form>
            <input
              type="text"
              placeholder="Pesquisa sua fruta preferida..."
              onKeyUp={handleKeyUp}
            />
            <S.Icon onClick={(e) =>{ 
              e.preventDefault()
              resultSearch()
            }}>
              <FaSearch />
            </S.Icon>
          </S.Form>
        </S.Wrapper>
      </Container>
    </S.Content>
  );
}
