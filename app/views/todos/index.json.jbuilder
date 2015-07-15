json.array!(@todos) do |todo|
  json.extract! todo, :id, :body, :done
  json.url todo_url(todo, format: :json)
end
