import React from "react";
import { getALL } from "./GraphQL/Query";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_POST } from "./GraphQL/Mutation";
export const PostList = () => {
  const { loading, error, data } = useQuery(getALL);
  const [deletePost, { errr }] = useMutation(DELETE_POST);
  if (loading) {
    return <h4>Loading....</h4>;
  }
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  const removePost = (id) => {
    deletePost({
      variables: {
        id: id,
      },
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto card p-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.getAll.map((res) => (
                  <tr>
                    <th>{res.id}</th>
                    <td>{res.title}</td>
                    <td>{res.description}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removePost(res.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
