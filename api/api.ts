export async function api(url_api?: string) {
  const res = await fetch(`http://localhost:3001/${url_api}`, {
    cache: "no-store", // Không cache để luôn lấy dữ liệu mới
  });
  return res.json();
}
