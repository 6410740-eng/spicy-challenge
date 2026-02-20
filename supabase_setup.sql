-- 1. 지역별/국가별 점수를 저장하는 테이블 생성
CREATE TABLE public.rankings (
  id text PRIMARY KEY,
  name text NOT NULL,
  category text NOT NULL, -- 'korea' 또는 'global'
  score bigint DEFAULT 0
);

-- 2. 1회용 시리얼 코드 검증을 위한 테이블 생성
CREATE TABLE public.serial_codes (
  code text PRIMARY KEY,
  is_used boolean DEFAULT false,
  used_at timestamp with time zone,
  used_by_region text
);

-- 3. 익명 사용자가 읽고 업데이트할 수 있도록 Row Level Security(RLS) 기본 설정 해제 (개발 초기용)
-- 프로덕션 배포 전에는 RLS 정책을 더 안전하게 설정해야 합니다.
ALTER TABLE public.rankings DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.serial_codes DISABLE ROW LEVEL SECURITY;

-- 4. 대한민국 지역 (Korea) 초기 데이터 삽입
INSERT INTO public.rankings (id, name, category, score) VALUES
  ('seoul', '서울 (Seoul)', 'korea', 6200),
  ('incheon', '인천 (Incheon)', 'korea', 4500),
  ('gyeonggi', '경기 (Gyeonggi)', 'korea', 8100),
  ('gangwon', '강원 (Gangwon)', 'korea', 3200),
  ('gyeongbuk', '경북 (Gyeongbuk)', 'korea', 4100),
  ('gyeongnam', '경남 (Gyeongnam)', 'korea', 4800),
  ('chungbuk', '충북 (Chungbuk)', 'korea', 2900),
  ('chungnam', '충남 (Chungnam)', 'korea', 3400),
  ('jeonbuk', '전북 (Jeonbuk)', 'korea', 2700),
  ('jeonnam', '전남 (Jeonnam)', 'korea', 3100),
  ('jeju', '제주 (Jeju)', 'korea', 2500);

-- 5. 글로벌 (Global) 초기 데이터 삽입
INSERT INTO public.rankings (id, name, category, score) VALUES
  ('us', '미국 (United States)', 'global', 12400),
  ('cn', '중국 (China)', 'global', 11200),
  ('jp', '일본 (Japan)', 'global', 8900),
  ('sea', '동남아 (Southeast Asia)', 'global', 7200),
  ('eu', '유럽 (Europe)', 'global', 9500);

-- 6. 테스트용 시리얼 코드 5개 생성 (원하시는 코드로 나중에 엑셀을 통해 대량 추가 가능)
INSERT INTO public.serial_codes (code) VALUES
  ('A8F9-2K3P'),
  ('SPCY-99XX'),
  ('FIRE-0001'),
  ('HELL-BITE'),
  ('TEST-CODE');
